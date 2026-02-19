/* ============================================
   ORDER — Place Order, Confetti & Modal
   ============================================ */

function placeOrder() {
    if (cart.length === 0) {
        alert(currentLang === 'en' ? "Your offering is empty." : "ഇല കാലിയാണ്.");
        return;
    }

    launchConfetti();
    const modal = document.getElementById('order-modal');
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
    const modal = document.getElementById('order-modal');
    modal.classList.remove('show');
}
