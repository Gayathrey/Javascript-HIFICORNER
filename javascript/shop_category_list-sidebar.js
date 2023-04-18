/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

var amplifierTypes = ["Int-amplifer", "Power-amplifer", "Preamplifer", "Tube-amplifer"]; //array consisting of 4 strings 
var showProduct = false; //boolean true or false

let urlString = window.location.href; //getting the url string
let urlObject = new URL(urlString); //defining url object
let category = urlObject.searchParams.get("category"); //getting the value of the "category" url parameter and putting it into a new variable called category.
let manufacturer = urlObject.searchParams.get("manufacturer"); //same as above.

if(category !== null) {
  document.querySelector(".category-header").innerHTML = category;
  document.querySelector(".category-link").innerHTML = "/ CATEGORY / " + category;
} else {
  document.querySelector(".category-header").innerHTML = manufacturer;
  document.querySelector(".category-link").innerHTML = "/ MANUFACTURER / " + manufacturer;
}

let data = new Request ("./produkter.json"); // getting all the data from json file & putting it in variable called "data".

fetch(data)
  .then(function(resp){
    return resp.json();
  })
  .then (function(data){  
    console.log(data)
    for (let i = 0; i < data.length; i++) { // looping through all the objects contained in the array called "data".
  const product = data[i];
  
  showProduct = false;

  if(category !== null) {
    if(category == "Amplifer") {
      for (let ii = 0; ii < amplifierTypes.length; ii++) {
        if(amplifierTypes[ii] == product.product) {showProduct = true}
      }
    } else {
      if(category == product.product) {showProduct = true}
    }    
  } else {
    if(manufacturer == product.manufacturer) {showProduct = true}
  }
    
  if(showProduct == true) {
  const content =
`<a href="hifishopsingleproduct.html?productid=${product.itemnumber}" class="product">
<div class="product__img--div">
<img class="product__img" src="${product.description.picture}" >
</div>
<h3 class="product__name">${product.name}</h3>
<p class="product__price">${product.price}</p>
<button class="product__button">ADD TO CART</button>
</a>
`;
document.querySelector('.products').innerHTML += content
    }
}
});
