/* ============================================
   CART — Add, Toggle, Update, Qty, Remove
   ============================================ */

let cart = [];

function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);
    const cartIcon = document.querySelector('.cart-icon');

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();

    // Subtle cart icon bump
    if (cartIcon) {
        cartIcon.style.transform = "scale(1.2)";
        setTimeout(() => cartIcon.style.transform = "scale(1)", 300);
    }
}

function updateViewLeafBtn() {
    const btn = document.getElementById('view-leaf-btn');
    if (!btn) return;
    if (cart.length > 0) {
        const count = cart.reduce((sum, i) => sum + i.quantity, 0);
        const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
        const label = translations[currentLang].view_leaf_btn || 'View Leaf';
        btn.innerHTML = `<i class="fas fa-leaf"></i>&nbsp; ${label} <span class="leaf-btn-count">${count}</span>&nbsp;·&nbsp;₹${total}`;
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');

    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">${translations[currentLang].cart_empty}</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;

            const name = currentLang === 'en' ? item.name : item.nameML;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="item-details">
                    <h4>${name}</h4>
                    <p>₹${item.price} x ${item.quantity}</p>
                </div>
                <div class="item-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeItem(${item.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    cartTotalElement.innerText = `₹${total}`;
    cartCountElement.innerText = count;
    updateViewLeafBtn();
}

function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeItem(id);
        } else {
            updateCartUI();
        }
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}
