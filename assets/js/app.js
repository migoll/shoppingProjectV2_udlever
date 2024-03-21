const productsEl = document.querySelector(".products");

// anvend fetch til at hente data fra lokal .jsonfil
fetch("./assets/js/watchesJson.json")
.then(res => res.json())
.then((watches) => {renderArticles(watches.watches);
})
.catch(err => console.log("FEJL!", err, "OST"));

function renderArticles(watches) {
  console.log("watches;", watches);
  watches.forEach(product => {

    productsEl.innerHTML += `
     <article class="product">
     <h3 class="product-title">${product.name}</h3>
     <img src="./assets/img/${product.imgUrl}" alt="$" />
     <p class="product-description">
      ${product.description}
     </p>
     <p class="product-price">${product.price},-</p>
   </article>` ;

    // skab ny knap
        // skab ny i
    const newButton = document.createElement("button");
    const newI = document.createElement("i");

    // indsæt classes på i
    newI.setAttribute("class", "fa-solid")
    newI.classList.add("fa-cart-plus")

    // indsæt tekst i button
    newButton.textContent = "Tilføj til kurv";


    // sæt eventlistener på knap
    newButton.addEventListener("click", () => {
      console.log("du har købt det her ur - tillykke");
    })

    const currentArticles = productsEl.querySelectorAll("article")
    //sæt <i> ind i button og sæt <button> ind i <article>

    currentArticles.forEach(article => {
      
    })


    newButton.append(newI);
    currentArticle.append(newButton);
  });
}



// {<button>
// Tilføj til kurv <i class="fa-solid fa-cart-plus"></i>
// </button>}
