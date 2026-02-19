/* ============================================
   UI — Scroll to Top & Initialization
   ============================================ */

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    renderMenu('all');
});
