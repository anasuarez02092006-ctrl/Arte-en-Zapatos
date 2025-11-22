// ================== AOS ==================
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// ================== PRODUCTOS ==================
let productos = [
  // ======== NIKE HOMBRE (40–44) ========
  {nombre:"Nike Air Max — Color 1", precio:140000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/airmax1.png"},
  {nombre:"Nike Air Max — Color 2", precio:140000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/airmax2.png"},
  {nombre:"Nike Air Max — Color 3", precio:140000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/airmax3.png"},

  {nombre:"Nike Shox — Color 1", precio:160000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/shox1.png"},
  {nombre:"Nike Shox — Color 2", precio:160000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/shox2.png"},
  {nombre:"Nike Shox — Color 3", precio:160000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/shox3.png"},
  {nombre:"Nike Shox — Color 4", precio:160000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/shox4.png"},

  {nombre:"Nike Metcon — Color 1", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/deportivo.png"},
  {nombre:"Nike Metcon — Color 2", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/deportivo2.png"},
  {nombre:"Nike Metcon — Color 3", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/deportivo3.png"},
  {nombre:"Nike Metcon — Color 4", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/deportivo4.png"},
  {nombre:"Nike Metcon — Color 5", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/deportivo5.png"},

  {nombre:"Air Max TN — Color 1", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn1.png"},
  {nombre:"Air Max TN — Color 2", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn2.png"},
  {nombre:"Air Max TN — Color 3", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn3.png"},
  {nombre:"Air Max TN — Color 4", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn4.png"},
  {nombre:"Air Max TN — Color 5", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn5.png"},
  {nombre:"Air Max TN — Color 6", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn6.png"},
  {nombre:"Air Max TN — Color 7", precio:150000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/tn7.png"},

  {nombre:"Jordan Retro 4 — Color 1", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-1.png"},
  {nombre:"Jordan Retro 4 — Color 2", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-2.png"},
  {nombre:"Jordan Retro 4 — Color 3", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-3.png"},
  {nombre:"Jordan Retro 4 — Color 4", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-4.png"},
  {nombre:"Jordan Retro 4 — Color 5", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-5.png"},
  {nombre:"Jordan Retro 4 — Color 6", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-6.png"},
  {nombre:"Jordan Retro 4 — Color 7", precio:180000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/retro4-7.png"},

  {nombre:"Nike Air Force — Color 1", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-1.png"},
  {nombre:"Nike Air Force — Color 2", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-2.png"},
  {nombre:"Nike Air Force — Color 3", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-3.png"},
  {nombre:"Nike Air Force — Color 4", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-4.png"},
  {nombre:"Nike Air Force — Color 5", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-5.png"},
  {nombre:"Nike Air Force — Color 6", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-6.png"},
  {nombre:"Nike Air Force — Color 7", precio:170000, marca:"Nike", tallas:[40,41,42,43,44], stock:{40:5,41:5,42:5,43:5,44:5}, img:"img/AF1-7.png"},

  // ======== DISEÑADOR (40–44) ========
  {nombre:"Dior 1", precio:280000, marca:"Diseñador", tallas:[40,41,42,43,44], stock:{40:3,41:3,42:3,43:3,44:3}, img:"img/diseñador1.png"},
  {nombre:"Dior 2", precio:280000, marca:"Diseñador", tallas:[40,41,42,43,44], stock:{40:3,41:3,42:3,43:3,44:3}, img:"img/diseñador2.png"},
  {nombre:"Dior 3", precio:280000, marca:"Diseñador", tallas:[40,41,42,43,44], stock:{40:3,41:3,42:3,43:3,44:3}, img:"img/diseñador3.png"},
  {nombre:"Dior 4", precio:280000, marca:"Diseñador", tallas:[40,41,42,43,44], stock:{40:3,41:3,42:3,43:3,44:3}, img:"img/diseñador5.png"},
  {nombre:"Amiri 1", precio:280000, marca:"Diseñador", tallas:[40,41,42,43,44], stock:{40:3,41:3,42:3,43:3,44:3}, img:"img/diseñador4.png"},
  {nombre:"Amiri 2", precio:280000, marca:"Diseñador", tallas:[40,41,42,43,44], stock:{40:3,41:3,42:3,43:3,44:3}, img:"img/diseñador6.png"},

  // ======== NEW BALANCE DAMA (36–39) ========
  {nombre:"New Balance 90 60 — 1", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/90 60-1.png"},
  {nombre:"New Balance 90 60 — 2", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/90 60-2.png"},
  {nombre:"New Balance 90 60 — 3", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/90 60-3.png"},
  {nombre:"New Balance 90 60 — 4", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/90 60-4.png"},

  {nombre:"New Balance 1000 — 1", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/1000-.png"},
  {nombre:"New Balance 1000 — 2", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/1000-2.png"},
  {nombre:"New Balance 1000 — 3", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/1000-3.png"},

  {nombre:"New Balance NB — 1", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/nb-.png"},
  {nombre:"New Balance NB — 2", precio:155000, marca:"New Balance", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/nb-2.png"},

  // ======== PERSONALIZABLES (36–44) ========
  {nombre:"Nike AF1 B", precio:270000, marca:"Personalizables", tallas:[36,37,38,39,40,41,42,43,44], stock:{36:5,37:5,38:5,39:5,40:5,41:5,42:5,43:5,44:5}, img:"img/Af1B.png"},
  {nombre:"Nike AF1 BB", precio:270000, marca:"Personalizables", tallas:[36,37,38,39,40,41,42,43,44], stock:{36:5,37:5,38:5,39:5,40:5,41:5,42:5,43:5,44:5}, img:"img/Af1BB.png"},
  {nombre:"Nike AF1 N", precio:270000, marca:"Personalizables", tallas:[36,37,38,39,40,41,42,43,44], stock:{36:5,37:5,38:5,39:5,40:5,41:5,42:5,43:5,44:5}, img:"img/Af1N.png"},
  {nombre:"Nike AF1 R", precio:270000, marca:"Personalizables", tallas:[36,37,38,39,40,41,42,43,44], stock:{36:5,37:5,38:5,39:5,40:5,41:5,42:5,43:5,44:5}, img:"img/Af1R.png"},

  // ======== NIKE DAMA (36–39) ========
  {nombre:"Nike P-6000 — 1", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/P-4.png"},
  {nombre:"Nike P-6000 — 2", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/P-2.png"},
  {nombre:"Nike P-6000 — 3", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/P-3.png"},

  {nombre:"Nike Bailleli — 1", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/bailleli1.png"},
  {nombre:"Nike Bailleli — 2", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/bailleli2.png"},

  {nombre:"Nike Vomero 5 — 1", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/vomero1.png"},
  {nombre:"Nike Vomero 5 — 2", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/vomero2.png"},
  {nombre:"Nike Vomero 5 — 3", precio:145000, marca:"Nike", tallas:[36,37,38,39], stock:{36:5,37:5,38:5,39:5}, img:"img/vomero3.png"}
];

// ================== VARIABLES ==================
let cart = [];
const container = document.getElementById("product-container");

// ================== DISPLAY ==================
function displayProducts(list){
  container.innerHTML = "";

  list.forEach((p,i)=>{
    // Nuevo selector de tallas desplegable
    const sizeHTML = `
      <details class="size-dropdown">
        <summary>Seleccionar talla</summary>
        <div class="size-options">
          ${p.tallas.map(t => `
            <button 
              class="size-btn" 
              onclick="selectSize(${i}, ${t}, this)"
              ${p.stock[t] <= 0 ? "disabled" : ""}
            >
              ${t}
            </button>
          `).join("")}
        </div>
      </details>
    `;

    container.innerHTML += `
      <div class="product" data-aos="zoom-in">
        <img src="${p.img}" alt="${p.nombre}" onclick="openModal(${i})">
        <h4>${p.nombre}</h4>
        <p>$${p.precio}</p>

        ${sizeHTML}

        <button class="add-to-cart" onclick="addToCart(${i})">Agregar</button>
      </div>
    `;
  });
}

// ================== Tallas ==================
let selectedSizes = {};

function selectSize(i, talla, btn){
  selectedSizes[i] = talla;
  btn.parentElement.querySelectorAll("button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// ================== Carrito ==================
function addToCart(i){
  const talla = selectedSizes[i];
  if(!talla){
    alert("Selecciona una talla");
    return;
  }

  if(productos[i].stock[talla] <= 0){
    alert("Esta talla está agotada");
    return;
  }

  productos[i].stock[talla]--;
  cart.push({...productos[i], talla});
  renderCart();
}

// ================== Render carrito ==================
function renderCart(){
  const list = document.getElementById("cart-list");
  let total = 0;

  list.innerHTML = cart
    .map((p, i) => {
      total += p.precio;
      return `<p>${p.nombre} — Talla ${p.talla} — $${p.precio} <button onclick="removeItem(${i})">X</button></p>`;
    })
    .join("");

  document.getElementById("total").innerHTML = `
    <strong>Total: $${total}</strong>
    <button onclick="sendWhatsApp()">Enviar pedido</button>
  `;
}

function removeItem(i){
  const prod = cart.splice(i,1)[0];
  productos.forEach(p => {
    if(p.nombre === prod.nombre){
      p.stock[prod.talla]++;
    }
  });
  renderCart();
  displayProducts(productos);
}

// ================== WhatsApp ==================
function sendWhatsApp(){
  let msg = "Hola, quiero hacer este pedido:%0A%0A";
  cart.forEach(p => {
    msg += `• ${p.nombre} — Talla ${p.talla} — $${p.precio}%0A`;
  });

  window.open(`https://wa.me/573174851298?text=${msg}`, "_blank");
}


// ================== FILTROS ==================
function filterProducts(marca) {
  if (marca === "Todos") {
    displayProducts(productos);
  } else {
    const filtered = productos.filter(p => p.marca === marca);
    displayProducts(filtered);
  }
}

// ================== Modal ==================
const modal = document.createElement("div");
modal.className = "modal";
document.body.appendChild(modal);

function openModal(i){
  const p = productos[i];
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">×</span>
      <img src="${p.img}">
      <h2>${p.nombre}</h2>
      <p>$${p.precio}</p>
    </div>
  `;
  modal.style.display = "flex";
}

function closeModal(){
  modal.style.display = "none";
}

// ================== Inicializar ==================
displayProducts(productos);
