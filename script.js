
let cart = [];


function addToCart(name, price, imgUrl) {

  cart.push({ name, price, imgUrl });


  updateCart();
  updateCartIcon();
}


function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");


  cartItems.innerHTML = "";


  let totalPrice = 0;


  cart.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

  
    const img = document.createElement("img");
    img.src = item.imgUrl;
    img.alt = item.name;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.marginRight = "10px";

    const span = document.createElement("span");
    span.textContent = `${item.name} - $${item.price}`;

    li.appendChild(img);
    li.appendChild(span);
    cartItems.appendChild(li);

    totalPrice += item.price;
  });

  totalPriceElement.textContent = `Total: $${totalPrice}`;
}


function updateCartIcon() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
}

function toggleCart() {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.toggle("open");
}


function closeCart() {
  const cartPopup = document.getElementById("cart-popup");
  cartPopup.classList.remove("open");
}
