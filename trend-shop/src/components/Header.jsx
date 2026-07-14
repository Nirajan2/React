import "../App.css";

function Header() {
    return (
        <div className="header">
            <div className="store-info">
                <img src="/Store-logo.jpg" alt="logo" />
                <p>Trend-shop</p>
            </div>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <div className="cart-icon">
                <button>
                    <img src="/cart-image.webp" alt="Cart"
                        style={{
                            height: '30px', width: '30px'
                        }} />
                </button>
            </div>

            <div className="search-bar">
                <input type="search" placeholder="search the suitable item" />
                <button>Search</button>
            </div>
        </div>
    );
}
export default Header;
