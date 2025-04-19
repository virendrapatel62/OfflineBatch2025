const cardTemplate = document.querySelector(".templates .card");
const cardsContainer = document.querySelector(".cards");
const loader = document.querySelector(".loader-div");

function formatPrice(price) {
  const rupeeSymbol = "₹";
  const doller = "$";
  return doller + Number(price).toFixed(2);
}

console.log(cardTemplate);
// console.log(cardTemplate.cloneNode(true));

function renderProducts(products = []) {
  products.forEach((product) => {
    const card = cardTemplate.cloneNode(true);

    card.querySelector(".title").innerText = product.title;

    card.querySelector("img").src = product.image;

    card.querySelector(".mrp").innerText = formatPrice(product.price + 30);
    card.querySelector(".price").innerText = formatPrice(product.price);

    cardsContainer.appendChild(card);
  });
}

function showLoader() {
  loader.style.display = "flex";
}

function hiderLoader() {
  loader.style.display = "none";
}

function fetchData() {
  showLoader();
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      const products = response.data;
      console.log(products);

      renderProducts(products);
    })
    .finally(() => {
      hiderLoader();
    });
}

fetchData();
