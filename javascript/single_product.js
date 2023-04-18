
fetch("produkter.json")
.then(function(response){
    console.log(response);
    return response.json();
})

.then(function(products){
        let urlString = window.location.href;
        let urlObject = new URL (urlString);
        let id = urlObject.searchParams.get("productid");
        let i = id -1;

        let productHolder = document.querySelector(".main");
        let productArticle = document.createElement("article");

        let productList = `
        <div class="main-home-link-container"><a class="main-home-link" href="frontpage.html">HOME </a><p class="main-home-link-p"> / ${products[i].name}</p></div>
        <div class="single-product-container">
        <section class="single-product-container__image-container">
            <div><img class="single-product-img src=""></div>
            <h1 class="single-product-container__text-container_h1">DESCRIPTION</h1>

            <table class="single-product-description">
                <tr>
                    <th>POWER OUTPUT</th>
                    <td>${products[i].poweroutput}</td>
                </tr>

                <tr>
                    <th>FREQUENCY RESPONSE</th>
                    <td><a>${products[i].frequencyresponse}</a></td>
                </tr>

                <tr>
                    <th>TOTAL HARMONIC DISTORTION</th>
                    <td>${products[i].totalharmonicdistortion}</td>
                </tr>

                <tr>
                    <th>DAMPING FACTOR</th>
                    <td>${products[i].dampingfactor}</td>
                </tr>

                <tr>
                    <th>INPUT SENSITIVITY: MM</th>
                    <td>2.2mV/47kOhm</td>
                </tr>

                <tr>
                    <th>INPUT SENSITIVITY: MC</th>
                    <td>X</td>
                </tr>

                <tr>
                    <th>SIGNAL TO NOISE RATIO: MM/MC</th>
                    <td>83 dB / X</td>
                </tr>

                <tr>
                    <th>INPUT SENSITIVITY: HIGH LEVEL</th>
                    <td>200mV/20kOhm</td>
                </tr>

                <tr>
                    <th>INPUT SENSITIVITY: BALANCED HIGH LEVEL</th>
                    <td>X</td>
                </tr>

                <tr>
                    <th>SIGNAL TO NOISE RATIO: HIGH LEVEL</th>
                    <td>102dB(2V inout)</td>
                </tr>

                <tr>
                    <th>INPUT SENSITIVITY: POWER AMP DIRECT IN</th>
                    <td>X</td>
                </tr>

                <tr>
                <th>SIGNAL TO NOISE RATIO: POWER AMP DIRECT IN</th>
                <td>X</td>
            </tr>
            </table>
            
        </section>

        <section class="single-product-container__text-container">

            <h1 class="single-product-container__text-container_h1">${products[i].name}</h1>

            <div class="single-product-price-container">
                <h3 class="single-product-price-h3">See other Marantz products</h3>
                <p class="single-product-price-p">${products[i].price}</p>
            </div>

            <p class="single-product-container__text-container_p">${products[i].description.text}</p>

            <h1 class="single-product-container__text-container_h1">ADDITIONAL INFORMATION</h1>
            
            <table class="single-product-additional-info">
                <tr>
                    <th>MANUFACTURER</th>
                    <td>${products[i].manufacturer}</td>
                </tr>

                <tr>
                    <th>MANUFACTURER LINK</th>
                    <td><a href="#">${products[i].name}</a></td>
                </tr>

                <tr>
                    <th>FREE WARRANTY</th>
                    <td>${products[i].freewarrenty}</td>
                </tr>

                <tr>
                    <th>DELIVERY CHARGE</th>
                    <td>${products[i].deliverycharge}</td>
                </tr>

                <tr>
                    <th>DELIVERY TIME</th>
                    <td>${products[i].deliverytime}</td>
                </tr>

                <tr>
                    <th>CARD SURCHARGES</th>
                    <td>${products[i].cardsurcharges}</td>
                </tr>
            </table>
        </section>
    </div>`;
        
       productArticle.setAttribute("class", "single_products");
       productHolder.appendChild(productArticle);
       productArticle.innerHTML = productList;
       document.querySelector(".single-product-img").setAttribute("src", products[i].description.picture);

    });


/*
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-actors">Cast:</p>
        <ul class="movie-actors__list">
        <li class="movie-actors__list-item">${movie.actors[0].name}</li>
        <li class="movie-actors__list-item">${movie.actors[1].name}</li>
        <li class="movie-actors__list-item">${movie.actors[2].name}</li>
        <li class="movie-actors__list-item">${movie.actors[3].name}</li>
        </ul>
        <p class="movie-rating">Rating: ${movie.rated}</p>
        <p class="movie-release-date">Release date: ${movie.released}</p>
        <p class="movie-genre">Genre: ${movie.genre}</p>
        <p class="movie-director">Director: ${movie.director}</p>
        <p class="movie-producer">Producer(s): ${movie.producer}</p>
*/ 