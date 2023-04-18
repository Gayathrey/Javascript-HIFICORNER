let data = new Request ("./produkter.json");

fetch(data)
.then(function(resp){
  return resp.json();
})

.then (function(data){
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    const product = data[i];

    const content =
    `<a href="hifishopsingleproduct.html?productid=${product.itemnumber}" class="product">
    <div class="product__img--div">
    <img class="product__img" src="${product.description.picture}" >
    </div>
    <h3 class="product__name">${product.name}</h3>
    <p class="product__price">${product.price}</p>
    <button class="product__button">ADD TO CART</button>

    </a>`;
  
    document.querySelector('.products').innerHTML += content
  }
});
