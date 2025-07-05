const products = [
  { id: 1, name: "T-shirt", price: "$10" },
  { id: 2, name: "Shoes", price: "$25" },
  { id: 3, name: "Watch", price: "$50" }
];

const container = document.getElementById("product-list");

if (container) {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("SW Registered"))
    .catch(err => console.error("SW Failed", err));
}
