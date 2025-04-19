// getting template card to reuse it
const cardTemplate = document.querySelector(".templates .card");

// card containers
const cardsContainer = document.querySelector(".cards");

// loader to hide and show
const loader = document.querySelector(".loader-div");

function formatPrice(price) {
  const rupeeSymbol = "₹";
  const doller = "$";
  return doller + Number(price).toFixed(2);
}

console.log(cardTemplate);
// console.log(cardTemplate.cloneNode(true));

function renderProducts(products = []) {
  products.forEach((product, index) => {
    const card = cardTemplate.cloneNode(true); // copy the card

    // changing card data
    card.querySelector(".title").innerText = product.title;

    card.querySelector("img").src = product.image;

    card.querySelector(".mrp").innerText = formatPrice(product.price + 30);
    card.querySelector(".price").innerText = formatPrice(product.price);

    // adding card to the cards container
    cardsContainer.appendChild(card);

    // setTimeout(() => {
    //   cardsContainer.appendChild(card);
    // }, 1000 * index);
  });
}

// loader hide and show
function showLoader() {
  loader.style.display = "flex";
}

function hiderLoader() {
  loader.style.display = "none";
}

// Fetaching all the products from the given API
function fetchData() {
  showLoader();
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      const products = response.data;
      console.log(products);

      renderProducts(products);
    })
    .catch((e) => {
      alert(e.message);
    })
    .finally(() => {
      hiderLoader();
    });
}

fetchData();
