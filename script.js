const products = [
  { id: "iphone-16-pro", name: "iPhone 16 Pro", brand: "Apple", category: "smartphone", price: 13499, previousPrice: 14499, rating: 4.9, reviews: 128, popularity: 98, badge: "Bestseller", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Natural Titanium", value: "#aaa9a4" }, { name: "Black Titanium", value: "#343638" }, { name: "Desert Titanium", value: "#c5a98b" }], storage: ["128 GB", "256 GB", "512 GB"], specs: { Display: "6.3″ Super Retina XDR", Camera: "48 MP Fusion camera", Chip: "A18 Pro", Battery: "Up to 27 hours" }, description: "A18 Pro chip. Camera Control. 4K 120 fps Dolby Vision. The ultimate iPhone experience, beautifully refined.", inStock: true },
  { id: "galaxy-s25-ultra", name: "Galaxy S25 Ultra", brand: "Samsung", category: "smartphone", price: 14999, previousPrice: 15999, rating: 4.8, reviews: 96, popularity: 95, badge: "Just arrived", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Titanium Silver", value: "#c5c6c7" }, { name: "Titanium Black", value: "#36383b" }, { name: "Titanium Gray", value: "#888982" }], storage: ["256 GB", "512 GB", "1 TB"], specs: { Display: "6.9″ Dynamic AMOLED", Camera: "200 MP quad camera", Chip: "Snapdragon 8 Elite", Battery: "5,000 mAh" }, description: "Your creativity, without limits. Galaxy AI, a remarkable 200 MP camera and a titanium design built for the extraordinary.", inStock: true },
  { id: "xiaomi-15", name: "Xiaomi 15", brand: "Xiaomi", category: "smartphone", price: 8999, previousPrice: 9999, rating: 4.7, reviews: 74, popularity: 88, badge: "−10%", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Black", value: "#252525" }, { name: "White", value: "#eeeae4" }, { name: "Green", value: "#697769" }], storage: ["256 GB", "512 GB"], specs: { Display: "6.36″ CrystalRes AMOLED", Camera: "Leica 50 MP triple camera", Chip: "Snapdragon 8 Elite", Battery: "5,240 mAh" }, description: "A compact powerhouse co-engineered with Leica. Experience pro-grade photography and flagship performance, every day.", inStock: true },
  { id: "pixel-9-pro", name: "Pixel 9 Pro", brand: "Google", category: "smartphone", price: 10999, previousPrice: 11999, rating: 4.8, reviews: 62, popularity: 84, badge: "Staff pick", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Obsidian", value: "#313236" }, { name: "Porcelain", value: "#e5e2dc" }, { name: "Hazel", value: "#939485" }], storage: ["128 GB", "256 GB", "512 GB"], specs: { Display: "6.3″ Super Actua", Camera: "50 MP triple rear camera", Chip: "Google Tensor G4", Battery: "24+ hours" }, description: "The best of Google AI, a brilliant camera system and seven years of updates—all in your hand.", inStock: true },
  { id: "oppo-reno-12", name: "Reno12 Pro", brand: "OPPO", category: "smartphone", price: 5999, previousPrice: 6499, rating: 4.6, reviews: 43, popularity: 72, badge: "−8%", image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Nebula Silver", value: "#c7c7c4" }, { name: "Space Brown", value: "#78675f" }], storage: ["256 GB", "512 GB"], specs: { Display: "6.7″ FHD+ AMOLED", Camera: "50 MP portrait camera", Chip: "MediaTek Dimensity 7300", Battery: "5,000 mAh" }, description: "Portrait-perfect photography and a graceful, lightweight design. Made for the moments you want to keep.", inStock: false },
  { id: "apple-watch-10", name: "Apple Watch Series 10", brand: "Apple", category: "smartwatch", price: 4799, previousPrice: 5299, rating: 4.8, reviews: 51, popularity: 81, badge: "New", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Jet Black", value: "#272829" }, { name: "Rose Gold", value: "#d1b3a4" }, { name: "Silver", value: "#c4c6c6" }], storage: ["42 mm", "46 mm"], specs: { Display: "Always-On Retina", Health: "ECG & sleep apnea notifications", Chip: "S10 SiP", Battery: "Up to 18 hours" }, description: "A bigger display, a thinner design and powerful health insights. A closer connection to everything that matters.", inStock: true },
  { id: "airpods-pro-2", name: "AirPods Pro 2", brand: "Apple", category: "headphones", price: 2699, previousPrice: 2999, rating: 4.9, reviews: 113, popularity: 92, badge: "Bestseller", image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=800&q=85", colors: [{ name: "White", value: "#f1f0eb" }], storage: ["USB-C"], specs: { Audio: "Adaptive Audio", Features: "Active Noise Cancellation", Chip: "Apple H2", Battery: "Up to 30 hours" }, description: "Intelligent noise control, immersive spatial audio and a more magical listening experience from the first moment.", inStock: true },
  { id: "galaxy-buds3-pro", name: "Galaxy Buds3 Pro", brand: "Samsung", category: "headphones", price: 2199, previousPrice: 2499, rating: 4.7, reviews: 39, popularity: 77, badge: "−12%", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Silver", value: "#c1c4c6" }, { name: "White", value: "#f1f0eb" }], storage: ["Bluetooth"], specs: { Audio: "24-bit Hi-Fi audio", Features: "Adaptive ANC", Chip: "Samsung Seamless Codec", Battery: "Up to 30 hours" }, description: "Studio-quality sound with intelligent noise cancellation, shaped for an effortless all-day fit.", inStock: true },
  { id: "xiaomi-band-9", name: "Xiaomi Smart Band 9", brand: "Xiaomi", category: "smartwatch", price: 599, previousPrice: 699, rating: 4.5, reviews: 87, popularity: 75, badge: "Great value", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Midnight Black", value: "#292b2e" }, { name: "Silver", value: "#bfc1c3" }, { name: "Rose Gold", value: "#c9a99a" }], storage: ["Standard"], specs: { Display: "1.62″ AMOLED", Health: "150+ sport modes", Sensors: "Heart rate & SpO₂", Battery: "Up to 21 days" }, description: "A brighter, smarter way to keep your day in motion. Lightweight wellness insights with up to 21 days of battery life.", inStock: true },
  { id: "anker-powercore", name: "Anker PowerCore 20K", brand: "Anker", category: "accessories", price: 499, previousPrice: 599, rating: 4.6, reviews: 56, popularity: 69, badge: "Everyday essential", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=85", colors: [{ name: "Black", value: "#252525" }, { name: "White", value: "#eee" }], storage: ["20,000 mAh"], specs: { Capacity: "20,000 mAh", Charging: "Power Delivery", Ports: "USB-C + USB-A", Output: "Up to 20 W" }, description: "Reliable power for the days that don’t stop. Compact enough to take everywhere, powerful enough to keep going.", inStock: true }
];

const MAD = new Intl.NumberFormat("fr-MA", { maximumFractionDigits: 0 });
const formatPrice = value => `${MAD.format(value)} MAD`;
const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#nav-search");
const cartKey = "technova-cart-v1";
const wishlistKey = "technova-wishlist-v1";
let selectedCategory = "all";
let searchTerm = "";
let wishlist = loadArray(wishlistKey);
let cart = loadCart();
let activeModalProduct = null;
let modalQuantity = 1;
let toastTimer;

function loadArray(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error(`Could not load ${key} from localStorage.`, error);
    return [];
  }
}
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(line => products.some(product => product.id === line.id) && Number.isInteger(line.quantity) && line.quantity > 0 && line.quantity < 100);
  } catch (error) {
    console.error("Could not load the saved cart from localStorage.", error);
    return [];
  }
}
function persist(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch (error) { console.error(`Could not save ${key} to localStorage.`, error); showToast("Your changes couldn’t be saved on this device."); }
}
function filteredProducts() {
  let visible = products.filter(product => {
    const matchesText = !searchTerm || `${product.name} ${product.brand} ${product.category}`.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesBrand = document.querySelector("#brand-filter").value === "all" || product.brand === document.querySelector("#brand-filter").value;
    const maxPrice = document.querySelector("#price-filter").value;
    const matchesPrice = maxPrice === "all" || product.price < Number(maxPrice);
    const matchesStock = !document.querySelector("#availability-filter").checked || product.inStock;
    return matchesText && matchesCategory && matchesBrand && matchesPrice && matchesStock;
  });
  const sort = document.querySelector("#sort-filter").value;
  if (sort === "price-low") visible.sort((a, b) => a.price - b.price);
  if (sort === "price-high") visible.sort((a, b) => b.price - a.price);
  if (sort === "popular") visible.sort((a, b) => b.popularity - a.popularity);
  return visible;
}
function renderProducts() {
  const visible = filteredProducts();
  productGrid.innerHTML = visible.map(product => `
    <article class="product-card">
      <div class="product-visual" data-view="${product.id}" tabindex="0" role="button" aria-label="View ${product.name} details">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-badge ${product.previousPrice > product.price ? "sale" : ""}">${product.badge}</span>
        <div class="product-actions">
          <button class="product-action ${wishlist.includes(product.id) ? "is-wishlisted" : ""}" type="button" data-wishlist="${product.id}" aria-label="${wishlist.includes(product.id) ? "Remove from" : "Add to"} wishlist"><i class="${wishlist.includes(product.id) ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
          <button class="product-action" type="button" data-quick-view="${product.id}" aria-label="Quick view ${product.name}"><i class="fa-regular fa-eye"></i></button>
        </div>
        <button class="quick-view" type="button" data-quick-view="${product.id}">Quick view <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
      </div>
      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        <div class="product-title-row"><h3>${product.name}</h3><span class="rating">★ <span>${product.rating} (${product.reviews})</span></span></div>
        <div class="product-price-row"><span class="product-price">${formatPrice(product.price)}</span>${product.previousPrice > product.price ? `<span class="old-price">${formatPrice(product.previousPrice)}</span>` : ""}</div>
        <div class="color-dots" aria-label="Available colors">${product.colors.slice(0, 4).map(color => `<span class="color-dot" title="${color.name}" style="background:${color.value}"></span>`).join("")}</div>
        <button class="product-add" type="button" ${product.inStock ? `data-add="${product.id}"` : `data-notify="${product.id}"`}><i class="fa-solid fa-${product.inStock ? "bag-shopping" : "bell"}"></i>${product.inStock ? "Add to bag" : "Notify me soon"}</button>
        <div class="stock-label ${product.inStock ? "" : "out"}">${product.inStock ? "● In stock · Ready to ship" : "● Temporarily unavailable"}</div>
      </div>
    </article>`).join("");
  document.querySelector("#results-count").textContent = `${visible.length} ${visible.length === 1 ? "product" : "products"} to discover`;
  document.querySelector("#empty-state").hidden = visible.length > 0;
  productGrid.hidden = visible.length === 0;
  const filtersActive = searchTerm || selectedCategory !== "all" || document.querySelector("#brand-filter").value !== "all" || document.querySelector("#price-filter").value !== "all" || document.querySelector("#availability-filter").checked;
  document.querySelector("#clear-filters").classList.toggle("visible", Boolean(filtersActive));
}
function showToast(message) {
  const region = document.querySelector("#toast-region");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i><span></span>`;
  toast.querySelector("span").textContent = message;
  region.append(toast);
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.classList.add("leaving"); window.setTimeout(() => toast.remove(), 220); }, 2600);
}
function toggleWishlist(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast(`${product.name} removed from your wishlist.`);
  } else {
    wishlist.push(id);
    showToast(`${product.name} saved to your wishlist.`);
  }
  persist(wishlistKey, wishlist);
  document.querySelector("#wishlist-count").textContent = wishlist.length;
  renderProducts();
}
function addToCart(id, quantity = 1) {
  const product = products.find(item => item.id === id);
  if (!product || !product.inStock) {
    showToast(product ? `${product.name} is temporarily unavailable.` : "That product could not be found.");
    return;
  }
  const line = cart.find(item => item.id === id);
  if (line) line.quantity = Math.min(99, line.quantity + quantity);
  else cart.push({ id, quantity: Math.min(quantity, 99) });
  persist(cartKey, cart);
  renderCart();
  showToast(`${product.name} added to your bag.`);
}
function updateCart(id, quantity) {
  if (quantity <= 0) cart = cart.filter(line => line.id !== id);
  else {
    const line = cart.find(item => item.id === id);
    if (line) line.quantity = Math.min(99, quantity);
  }
  persist(cartKey, cart);
  renderCart();
}
function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + (products.find(product => product.id === item.id)?.price || 0) * item.quantity, 0);
  document.querySelector("#cart-count").textContent = count;
  document.querySelector("#drawer-item-count").textContent = `(${count})`;
  document.querySelector("#cart-subtotal").textContent = formatPrice(total);
  document.querySelector("#cart-empty").classList.toggle("visible", !cart.length);
  document.querySelector("#drawer-footer").classList.toggle("hidden", !cart.length);
  document.querySelector("#cart-items").innerHTML = cart.map(line => {
    const product = products.find(item => item.id === line.id);
    if (!product) return "";
    return `<article class="cart-line"><img src="${product.image}" alt="${product.name}"><div class="cart-line-info"><small>${product.brand}</small><strong>${product.name}</strong><span class="line-price">${formatPrice(product.price)}</span><div class="quantity-control"><button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${line.quantity}</span><button type="button" data-quantity="${product.id}" data-change="1" aria-label="Increase quantity">+</button></div></div><div class="cart-line-end"><strong>${formatPrice(product.price * line.quantity)}</strong><button class="remove-item" type="button" data-remove="${product.id}" aria-label="Remove ${product.name}"><i class="fa-regular fa-trash-can"></i></button></div></article>`;
  }).join("");
  const remaining = Math.max(0, 2000 - total);
  document.querySelector("#shipping-message").textContent = remaining ? `Add ${formatPrice(remaining)} for complimentary delivery.` : "Complimentary delivery is on us.";
  document.querySelector("#shipping-progress").style.width = `${Math.min(100, total / 2000 * 100)}%`;
}
function openCart() {
  document.querySelector("#cart-drawer").classList.add("open");
  document.querySelector("#cart-drawer").setAttribute("aria-hidden", "false");
  document.querySelector("#drawer-backdrop").classList.add("open");
  document.body.classList.add("no-scroll");
  document.querySelector("#cart-close").focus();
}
function closeCart() {
  document.querySelector("#cart-drawer").classList.remove("open");
  document.querySelector("#cart-drawer").setAttribute("aria-hidden", "true");
  document.querySelector("#drawer-backdrop").classList.remove("open");
  if (!document.querySelector("#modal-backdrop").classList.contains("open")) document.body.classList.remove("no-scroll");
}
function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  activeModalProduct = product;
  modalQuantity = 1;
  const related = products.filter(item => item.id !== id && (item.category === product.category || item.brand === product.brand)).slice(0, 4);
  document.querySelector("#modal-content").innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-gallery"><img class="modal-main-image" id="modal-main-image" src="${product.image}" alt="${product.name}"><div class="gallery-thumbs"><button class="gallery-thumb active" data-gallery-image="${product.image}" aria-label="View product image"><img src="${product.image}" alt=""></button>${product.colors.slice(0, 3).map(color => `<button class="gallery-thumb" data-gallery-image="${product.image}" aria-label="View ${color.name} color"><img src="${product.image}" alt="${color.name}"></button>`).join("")}</div></div>
      <div class="modal-product-info"><span class="product-brand">${product.brand} · ${product.category}</span><h2>${product.name}</h2><span class="rating">★ <span>${product.rating} · ${product.reviews} reviews</span></span><p class="modal-description">${product.description}</p><div class="modal-price">${formatPrice(product.price)}${product.previousPrice > product.price ? `<del>${formatPrice(product.previousPrice)}</del>` : ""}</div>
        <div class="spec-list">${Object.entries(product.specs).map(([key,value]) => `<span>${key}<strong>${value}</strong></span>`).join("")}</div>
        <div class="modal-option"><strong>Storage / option</strong><div class="option-buttons storage-buttons">${product.storage.map((value,index) => `<button class="option-button ${index === 0 ? "active" : ""}" type="button">${value}</button>`).join("")}</div></div>
        <div class="modal-option"><strong>Color · <span id="selected-color">${product.colors[0].name}</span></strong><div class="option-buttons color-buttons">${product.colors.map((color,index) => `<button class="option-button color-option ${index === 0 ? "active" : ""}" type="button" data-color="${color.name}"><span class="color-dot" style="background:${color.value}"></span>${color.name}</button>`).join("")}</div></div>
        <div class="modal-add-row"><div class="modal-quantity"><button type="button" data-modal-quantity="-1" aria-label="Decrease quantity">−</button><span id="modal-quantity">1</span><button type="button" data-modal-quantity="1" aria-label="Increase quantity">+</button></div><button class="button button-dark" type="button" ${product.inStock ? `data-modal-add="${product.id}"` : `data-modal-notify="${product.id}"`}>${product.inStock ? "Add to bag" : "Notify me when available"} <i class="fa-solid fa-arrow-right"></i></button></div>
      </div></div>${related.length ? `<div class="related-products"><strong>You may also love</strong><div class="related-items">${related.map(item => `<button class="related-item" type="button" data-view="${item.id}"><img src="${item.image}" alt=""><span><strong>${item.name}</strong><small>${formatPrice(item.price)}</small></span></button>`).join("")}</div></div>` : ""}`;
  document.querySelector("#modal-backdrop").classList.add("open");
  document.querySelector("#modal-backdrop").setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  document.querySelector("#modal-close").focus();
}
function closeModal() {
  document.querySelector("#modal-backdrop").classList.remove("open");
  document.querySelector("#modal-backdrop").setAttribute("aria-hidden", "true");
  if (!document.querySelector("#cart-drawer").classList.contains("open")) document.body.classList.remove("no-scroll");
}
function resetFilters() {
  selectedCategory = "all";
  searchTerm = "";
  searchInput.value = "";
  document.querySelector("#brand-filter").value = "all";
  document.querySelector("#price-filter").value = "all";
  document.querySelector("#availability-filter").checked = false;
  document.querySelector("#sort-filter").value = "featured";
  document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === "all"));
  renderProducts();
}

document.querySelector("#nav-search-form").addEventListener("submit", event => { event.preventDefault(); searchTerm = searchInput.value.trim().toLowerCase(); renderProducts(); document.querySelector("#products").scrollIntoView({ behavior: "smooth" }); });
searchInput.addEventListener("input", () => { searchTerm = searchInput.value.trim().toLowerCase(); renderProducts(); });
document.querySelectorAll(".filter-tab").forEach(tab => tab.addEventListener("click", () => {
  selectedCategory = tab.dataset.category;
  document.querySelectorAll(".filter-tab").forEach(item => item.classList.toggle("active", item === tab));
  renderProducts();
}));
["#brand-filter", "#price-filter", "#availability-filter", "#sort-filter"].forEach(selector => document.querySelector(selector).addEventListener("change", renderProducts));
document.querySelector("#clear-filters").addEventListener("click", resetFilters);
document.querySelector("#reset-empty").addEventListener("click", resetFilters);
document.querySelectorAll(".category-card").forEach(card => card.addEventListener("click", () => {
  selectedCategory = card.dataset.category || "all";
  document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === selectedCategory));
  if (card.dataset.brand) document.querySelector("#brand-filter").value = card.dataset.brand;
  renderProducts();
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
}));
productGrid.addEventListener("click", event => {
  const wishlistButton = event.target.closest("[data-wishlist]");
  const addButton = event.target.closest("[data-add]");
  const notifyButton = event.target.closest("[data-notify]");
  const viewButton = event.target.closest("[data-quick-view], [data-view]");
  if (wishlistButton) toggleWishlist(wishlistButton.dataset.wishlist);
  else if (addButton) addToCart(addButton.dataset.add);
  else if (notifyButton) showToast("We’ll let you know when this item is available again.");
  else if (viewButton) openProduct(viewButton.dataset.quickView || viewButton.dataset.view);
});
productGrid.addEventListener("keydown", event => {
  const card = event.target.closest("[data-view]");
  if (card && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); openProduct(card.dataset.view); }
});
document.querySelector("#wishlist-shortcut").addEventListener("click", () => {
  selectedCategory = "all";
  searchTerm = "";
  searchInput.value = "";
  document.querySelector("#brand-filter").value = "all";
  document.querySelector("#price-filter").value = "all";
  document.querySelector("#availability-filter").checked = false;
  document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.category === "all"));
  productGrid.innerHTML = products.filter(product => wishlist.includes(product.id)).map(product => `
    <article class="product-card"><div class="product-visual" data-view="${product.id}" tabindex="0" role="button" aria-label="View ${product.name} details"><img src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-badge">Wishlist</span><div class="product-actions"><button class="product-action is-wishlisted" type="button" data-wishlist="${product.id}" aria-label="Remove from wishlist"><i class="fa-solid fa-heart"></i></button><button class="product-action" type="button" data-quick-view="${product.id}" aria-label="Quick view ${product.name}"><i class="fa-regular fa-eye"></i></button></div><button class="quick-view" type="button" data-quick-view="${product.id}">Quick view <i class="fa-solid fa-arrow-up-right-from-square"></i></button></div><div class="product-info"><span class="product-brand">${product.brand}</span><div class="product-title-row"><h3>${product.name}</h3><span class="rating">★ <span>${product.rating} (${product.reviews})</span></span></div><div class="product-price-row"><span class="product-price">${formatPrice(product.price)}</span></div><div class="color-dots">${product.colors.slice(0,4).map(color=>`<span class="color-dot" title="${color.name}" style="background:${color.value}"></span>`).join("")}</div><button class="product-add" type="button" ${product.inStock ? `data-add="${product.id}"` : `data-notify="${product.id}"`}><i class="fa-solid fa-${product.inStock ? "bag-shopping" : "bell"}"></i>${product.inStock ? "Add to bag" : "Notify me soon"}</button></div></article>`).join("");
  document.querySelector("#results-count").textContent = `${wishlist.length} saved ${wishlist.length === 1 ? "favorite" : "favorites"}`;
  document.querySelector("#empty-state").hidden = wishlist.length > 0;
  productGrid.hidden = wishlist.length === 0;
  document.querySelector("#clear-filters").classList.add("visible");
  document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#cart-open").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
document.querySelector("#drawer-backdrop").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", () => { closeCart(); document.querySelector("#products").scrollIntoView({ behavior: "smooth" }); });
document.querySelector("#cart-items").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) {
    const line = cart.find(item => item.id === quantityButton.dataset.quantity);
    if (line) updateCart(line.id, line.quantity + Number(quantityButton.dataset.change));
  } else if (removeButton) {
    const product = products.find(item => item.id === removeButton.dataset.remove);
    updateCart(removeButton.dataset.remove, 0);
    if (product) showToast(`${product.name} removed from your bag.`);
  }
});
document.querySelector("#checkout-button").addEventListener("click", () => showToast("Checkout is coming soon. Your bag is safely saved."));
document.querySelector("#modal-close").addEventListener("click", closeModal);
document.querySelector("#modal-backdrop").addEventListener("click", event => { if (event.target === event.currentTarget) closeModal(); });
document.querySelector("#modal-content").addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-modal-quantity]");
  const addButton = event.target.closest("[data-modal-add]");
  const notifyButton = event.target.closest("[data-modal-notify]");
  const thumb = event.target.closest("[data-gallery-image]");
  const storageButton = event.target.closest(".storage-buttons .option-button");
  const colorButton = event.target.closest("[data-color]");
  const relatedButton = event.target.closest("[data-view]");
  if (quantityButton) {
    modalQuantity = Math.max(1, Math.min(99, modalQuantity + Number(quantityButton.dataset.modalQuantity)));
    document.querySelector("#modal-quantity").textContent = modalQuantity;
  } else if (addButton) addToCart(addButton.dataset.modalAdd, modalQuantity);
  else if (notifyButton) showToast("We’ll let you know when this item is available again.");
  else if (thumb) {
    document.querySelector("#modal-main-image").src = thumb.dataset.galleryImage;
    document.querySelectorAll(".gallery-thumb").forEach(item => item.classList.toggle("active", item === thumb));
  } else if (storageButton) {
    document.querySelectorAll(".storage-buttons .option-button").forEach(item => item.classList.toggle("active", item === storageButton));
  } else if (colorButton) {
    document.querySelectorAll("[data-color]").forEach(item => item.classList.toggle("active", item === colorButton));
    document.querySelector("#selected-color").textContent = colorButton.dataset.color;
  } else if (relatedButton) openProduct(relatedButton.dataset.view);
});
document.querySelector(".menu-toggle").addEventListener("click", event => {
  const menu = document.querySelector(".main-nav");
  const open = menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
  event.currentTarget.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  event.currentTarget.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
});
document.querySelectorAll(".main-nav a").forEach(link => link.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  document.querySelector(".menu-toggle").setAttribute("aria-label", "Open navigation");
  document.querySelector(".menu-toggle").innerHTML = '<i class="fa-solid fa-bars"></i>';
}));
document.querySelector("#newsletter-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = document.querySelector("#newsletter-email");
  if (!email.checkValidity()) { email.reportValidity(); return; }
  showToast("You’re on the list. Thanks for being here!");
  event.currentTarget.reset();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeCart(); closeModal(); }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); }
});

document.querySelector("#wishlist-count").textContent = wishlist.length;
renderProducts();
renderCart();
