const product = {
    id: "8852236",
    title: "Кроссовки летние Griri 80",
    price: 3500,
    img: "/crosGriri"
};

// Избранное
const favoriteBtn = document.getElementById('favorite-btn');
function updateFavoriteIcon() {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.find(item => item.id === product.id)) {
        favoriteBtn.classList.add('hearted');
        favoriteBtn.innerHTML = '🖤'; // черное сердечко
    } else {
        favoriteBtn.classList.remove('hearted');
        favoriteBtn.innerHTML = '🤍'; // пустое сердечко
    }
}
favoriteBtn.addEventListener('click', () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.find(item => item.id === product.id)) {
        favorites = favorites.filter(item => item.id !== product.id);
    } else {
        favorites.push(product);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteIcon();
});
updateFavoriteIcon();

// Корзина
document.getElementById('add-cart-btn').addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.count = (existing.count || 1) + 1;
    } else {
        cart.push({...product, count: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар добавлен в корзину!');
});

// Заказать (можно сделать переход на оформление заказа)
document.getElementById('order-btn').addEventListener('click', () => {
    window.location.href = "dost.html";
});

// Доставка
document.getElementById('delivery-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "dost.html";
});
document.getElementById('footer-delivery-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "dost.html";
});
