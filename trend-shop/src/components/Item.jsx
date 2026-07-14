import "../App.css";

function Item({ product }) {
    return (
        <div className={product.stock === 0 ? "Item-cart sold-out" : "Item-cart"}>
            <div className="image-wrapper">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    style={{ height: "100px" }}
                />
                {product.rating >= 4.8 && <span className="best-seller-badge">⭐ Best Seller</span>}
            </div>
            <p>Name: {product.title}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category.name}</p>
            <p>Description: {product.description}</p>
            <div>Rating: <StarRating rating={product.rating} /></div>
            <p>Price: Rs.{product.price}</p>
            {product.stock <= 12 && <p className="low-stock-badge"> only {product.stock} left</p>}
            {product.price > 250 && <span className="premium-badge">Premium</span>}


            <Button stock={product.stock} />
        </div>
    );
}

function Button({ stock }) {
    return (
        <div className="item-button-section">
            <button disabled={stock === 0}>
                {stock === 0 ? "Sold Out" : "Add to cart"}
                <img src="/cart-image.webp" alt="" style={{ height: "30px", width: "30px" }} />
            </button>
        </div>
    );
}

function StarRating({ rating }) {
    const percentage = (rating / 5) * 100;
    return (
        <div className="star-rating">
            <div className="star-rating-background">★★★★★</div>
            <div className="star-rating-foreground" style={{ width: `${percentage}%` }}>
                ★★★★★
            </div>
        </div>
    );
}
export default Item;