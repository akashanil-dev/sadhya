const translations = {
    en: {
        add_btn: "Add to Leaf",
        no_results: "No dishes found.",
        cart_empty: "Your leaf is empty. Please serve.",
        view_leaf_btn: "View Leaf",
        toggle_btn: "മലയാളം"
    },
    ml: {
        add_btn: "ഇലയിൽ ചേർക്കുക",
        no_results: "ഭക്ഷണങ്ങൾ ലഭ്യമല്ല.",
        cart_empty: "ഇല കാലിയാണ്. ദയവായി ചേർക്കുക.",
        view_leaf_btn: "ഇല കാണുക",
        toggle_btn: "English"
    }
};
const menuData = [
    {
        id: 1,
        name: "Kerala Matta Rice",
        nameML: "കുത്തരി ചോറ്",
        price: 80,
        category: "rice",
        description: "Nutritious red rice, the heart of the Sadya.",
        descriptionML: "സദ്യയുടെ പ്രധാന ഭാഗമായ പോഷകസമൃദ്ധമായ കുത്തരി.",
        image: "images/mattarice.png",
        tags: ["Staple", "Nutritious"],
        tagsML: ["പ്രധാനം", "പോഷകപ്രദം"]
    },
    {
        id: 2,
        name: "Sambar",
        nameML: "സാമ്പാർ",
        price: 60,
        category: "curry",
        description: "Aromatic lentil stew rich with garden vegetables.",
        descriptionML: "പച്ചക്കറികളും പരിപ്പും ചേര്ന്ന സുഗന്ധപൂരിതമായ കറി.",
        image: "images/sambar.png",
        tags: ["Spiced", "Flavorful"],
        tagsML: ["സുഗന്ധം", "രുചികരം"]
    },
    {
        id: 3,
        name: "Avial",
        nameML: "അവിയൽ",
        price: 90,
        category: "curry",
        description: "A divine blend of vegetables, coconut, and curd.",
        descriptionML: "പച്ചക്കറികളും തേങ്ങയും തൈരും ചേർന്ന ദിവ്യമായ കൂട്ട്.",
        image: "images/avial.png",
        tags: ["Traditional", "Mild"],
        tagsML: ["പരമ്പരാഗതം", "മിതമായത്"]
    },
    {
        id: 4,
        name: "Parippu Curry",
        nameML: "പരിപ്പ് കറി",
        price: 50,
        category: "curry",
        description: "Golden moong dal seasoned with pure ghee.",
        descriptionML: "നെയ്യ് ചേർത്ത സ്വാദിഷ്ടമായ ചെറുപയർ പരിപ്പ് കറി.",
        image: "images/parippucurry.png",
        tags: ["Comfort", "Classic"],
        tagsML: ["ലളിതം", "ക്ലാസിക്"]
    },
    {
        id: 5,
        name: "Cabbage Thoran",
        nameML: "ക്യാബേജ് തോരൻ",
        price: 70,
        category: "side",
        description: "Stir-fried farm fresh cabbage with grated coconut.",
        descriptionML: "തേങ്ങ ചേർത്ത ഫ്രഷ് ക്യാബേജ് തോരൻ.",
        image: "images/thoran.png",
        tags: ["Fresh", "Side"],
        tagsML: ["ഫ്രഷ്", "തോരൻ"]
    },
    {
        id: 6,
        name: "Kaalan",
        nameML: "കാളൻ",
        price: 85,
        category: "curry",
        description: "Thick yogurt-based curry with sun-dried yam.",
        descriptionML: "തൈരും ചേനയും ചേർത്ത കുറുകിയ കറി.",
        image: "images/kaalan.png",
        tags: ["Tangy", "Preserved"],
        tagsML: ["പുളിപ്പുള്ളത്", "പരമ്പരാഗതം"]
    },
    {
        id: 7,
        name: "Pappadam",
        nameML: "പപ്പടം",
        price: 20,
        category: "side",
        description: "Crispy lentil wafers, a festive crunch.",
        descriptionML: "സദ്യക്ക് ഒഴിവാക്കാനാവാത്ത മൊരിഞ്ഞ പപ്പടം.",
        image: "images/pappadam.png",
        tags: ["Crispy", "Essential"],
        tagsML: ["മൊരിഞ്ഞത്", "നിർബന്ധം"]
    },
    {
        id: 8,
        name: "Ada Pradhaman",
        nameML: "അട പ്രഥമൻ",
        price: 120,
        category: "dessert",
        description: "Royal sweet delicacy with rice flakes and jaggery.",
        descriptionML: "അടയും ശർക്കരയും ചേർത്ത രാജകീയ പായസം.",
        image: "images/pradhaman.png",
        tags: ["Sweet", "Signature"],
        tagsML: ["മധുരം", "സ്പെഷ്യൽ"]
    },
    {
        id: 9,
        name: "Palada Payasam",
        nameML: "പാലട പായസം",
        price: 130,
        category: "dessert",
        description: "Divine rice pudding slow-cooked in milk.",
        descriptionML: "പാലിൽ കുറുക്കിയെടുത്ത രുചികരമായ പായസം.",
        image: "images/paayasam.png",
        tags: ["Creamy", "Divine"],
        tagsML: ["പാൽരുചി", "ദിവ്യം"]
    }
];

let cart = [];
let currentLang = 'en'; // Default language

// DOM Elements
const menuContainer = document.getElementById('menu-container');
const cartIcon = document.querySelector('.cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('order-modal');
const searchInput = document.getElementById('search-input');
const langToggleBtn = document.getElementById('lang-toggle');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    renderMenu('all');
});

// Toggle Language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ml' : 'en';
    updateLanguageUI();
    renderMenu(); // Re-render menu to show translated text
    updateCartUI(); // Re-render cart to show translated text
}

// Update Static UI Text
function updateLanguageUI() {
    const t = translations[currentLang];

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    // Update specific placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    // Update toggle button text
    langToggleBtn.innerText = t.toggle_btn;

    // Change font based on language
    if (currentLang === 'ml') {
        document.body.style.fontFamily = "'Noto Serif Malayalam', serif";
    } else {
        document.body.style.fontFamily = "'Lora', serif";
    }
}

// Render Menu
function renderMenu(category = 'all', searchQuery = '') {
    // Keep filter selection logic but don't clear container yet if calling from filter click
    // Here we assume category is active category if not passed
    if (!category || category === 'undefined') {
        const activeBtn = document.querySelector('.filter-btn.active');
        category = activeBtn ? activeBtn.dataset.filter : 'all';
    }

    menuContainer.innerHTML = '';

    let itemsToRender = menuData;

    // Filter by Category
    if (category !== 'all') {
        itemsToRender = itemsToRender.filter(item => item.category === category);
    }

    // Filter by Search Query
    if (searchQuery) {
        const lowerQuery = searchQuery.toLowerCase();
        itemsToRender = itemsToRender.filter(item =>
            (currentLang === 'en' ? item.name : item.nameML).toLowerCase().includes(lowerQuery) ||
            (currentLang === 'en' ? item.description : item.descriptionML).toLowerCase().includes(lowerQuery)
        );
    }

    if (itemsToRender.length === 0) {
        menuContainer.innerHTML = `<p class="no-results" style="text-align:center; width:100%; font-size: 1.2rem; font-style:italic;">${translations[currentLang].no_results}</p>`;
        return;
    }

    itemsToRender.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('menu-item');

        const name = currentLang === 'en' ? item.name : item.nameML;
        const description = currentLang === 'en' ? item.description : item.descriptionML;
        const tags = currentLang === 'en' ? item.tags : item.tagsML;
        const addBtnText = translations[currentLang].add_btn;

        // Generate tag spans (creative feature)
        const tagsHtml = tags ? tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';

        card.innerHTML = `
            <div class="img-container">
                <img src="${item.image}" alt="${name}" class="menu-img">
                <div class="tags-container">${tagsHtml}</div>
            </div>
            <div class="menu-info">
                <div class="menu-title">
                    <h3>${name}</h3>
                    <span class="price">₹${item.price}</span>
                </div>
                <p>${description}</p>
                <button class="add-btn" onclick="addToCart(${item.id})">${addBtnText}</button>
            </div>
        `;
        menuContainer.appendChild(card);
    });
}

// Filter Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.filter, searchInput ? searchInput.value : '');
    });
});

// Search Logic
function filterMenu() {
    renderMenu(); // Uses default params which grab active category and input value
}

// Add to Cart
function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();

    // Subtle cart icon bump — no auto-open
    cartIcon.style.transform = "scale(1.2)";
    setTimeout(() => cartIcon.style.transform = "scale(1)", 300);
}

// Show/hide the floating View Leaf button
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

// Toggle Cart Sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Update Cart UI
function updateCartUI() {
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

// Update Quantity
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

// Remove Item
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert(currentLang === 'en' ? "Your offering is empty." : "ഇല കാലിയാണ്.");
        return;
    }

    launchConfetti();
    modal.classList.add('show');

    cart = [];
    updateCartUI();
    toggleCart();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var colors = ['#FFB300', '#ffffff'];

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 30 * (timeLeft / duration);
        confetti({
            particleCount: particleCount,
            startVelocity: 30,
            spread: 360,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: colors
        });
    }, 250);
}

function closeModal() {
    modal.classList.remove('show');
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});
