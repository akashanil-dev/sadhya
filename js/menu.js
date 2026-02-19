/* ============================================
   MENU — Render, Filter & Search
   ============================================ */

function renderMenu(category = 'all', searchQuery = '') {
    const menuContainer = document.getElementById('menu-container');
    const searchInput = document.getElementById('search-input');

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

// Filter Buttons
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(btn.dataset.filter, searchInput ? searchInput.value : '');
        });
    });
});

function filterMenu() {
    renderMenu(); // Grabs active category and current input value
}
