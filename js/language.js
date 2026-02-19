/* ============================================
   LANGUAGE — Toggle & UI Update
   ============================================ */

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ml' : 'en';
    updateLanguageUI();
    renderMenu();    // Re-render menu to show translated text
    updateCartUI();  // Re-render cart to show translated text
}

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
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) langToggleBtn.innerText = t.toggle_btn;

    // Change font based on language
    if (currentLang === 'ml') {
        document.body.style.fontFamily = "'Noto Serif Malayalam', serif";
    } else {
        document.body.style.fontFamily = "'Lora', serif";
    }
}
