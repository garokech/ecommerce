const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
        <img src="img/logo.png" class="logo" alt="Logo">
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search here">
                <button class="search-btn">Search</button>
            </div>
            <a href="#"><img src="img/user.png"alt="User symbol"></a>
            <a href="#"><img src="img/cart.png"alt="Cart symbol"></a>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Women's</a></li>
        <li class="link-item"><a href="#" class="link">Men's</a></li>
        <li class="link-item"><a href="#" class="link">Kid's</a></li>
        <li class="link-item"><a href="#" class="link">Accessories</a></li>
    </ul>
`;
}

createNav();