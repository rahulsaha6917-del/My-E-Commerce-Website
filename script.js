const products = [
  {
    id: 1,
    name: "Hair-Dryer",
    price: "$199",
    img: "https://rukminim2.flixcart.com/image/1490/1490/xif0q/hair-dryer/x/k/a/hd2222-hd2222-havells-original-imahcsq472xwupwf.jpeg?q=90"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$1049",
    img: "https://rukminim2.flixcart.com/image/1490/1490/xif0q/headphone/9/a/d/-original-imahgnf4h2xjhtb9.jpeg?q=90"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "$2999",
    img: "https://rukminim2.flixcart.com/image/1490/1490/xif0q/shoe/y/s/j/9-snk-eva-730-wht-blu-9-bruton-multicolor-original-imahgmatfy7qyvga.jpeg?q=90"
  },
  {
    id: 4,
    name: "T-Shirt",
    price: "$999",
    img: "https://rukminim2.flixcart.com/image/1490/1490/xif0q/t-shirt/2/r/7/-original-imahjzq3jy7nqjyr.jpeg?q=90"
  },
  {
    id: 5,
    name: "Blazer",
    price: "$4999",
    img: "https://rukminim2.flixcart.com/image/1490/1490/xif0q/blazer/q/l/4/s-kjx-gyc3mhrn-c3-humjoli-mens-wear-original-imahcffkxfvdfnyf.jpeg?q=90"
  },
];

const productList = document.getElementById("productList");
const recommended = document.getElementById("recommended");

/* Load Products */
function loadProducts() {
  products.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
        <button onclick="trackProduct(${product.id})">View Product</button>
      </div>
    `;
  });
}

/* Track user behavior */
function trackProduct(id) {
  localStorage.setItem("lastViewed", id);
  showRecommendation();
}

/* Recommendation logic */
function showRecommendation() {
  const last = localStorage.getItem("lastViewed");
  if (!last) return;

  const product = products.find(p => p.id == last);
  recommended.innerHTML = `
    <div class="card">
      <img src="${product.img}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button onclick="trackProduct(${product.id})">Buy Now</button>
    </div>
  `;
}

/* Personalization */
function setName() {
  const name = prompt("Enter your name:");
  if (name) {
    localStorage.setItem("username", name);
    document.getElementById("username").innerText = name;
  }
}

function loadName() {
  const name = localStorage.getItem("username");
  if (name) {
    document.getElementById("username").innerText = name;
  }
}

/* Init */
loadProducts();
loadName();
showRecommendation();
