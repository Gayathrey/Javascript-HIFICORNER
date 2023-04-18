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



//

let urlString = window.location.href;
let urlObject = new URL(urlString);
let category = urlObject.searchParams.get("category");

document.getElementById("item_type").innerHTML = category;

let data = new Request ("./produkter.json");

fetch(data)
  .then(function(resp){
    return resp.json();
  })
  .then (function(data){
    console.log(data)
    for (let i = 0; i < data.length; i++) {
  const product = data[i];

  if(category == product.product) {
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