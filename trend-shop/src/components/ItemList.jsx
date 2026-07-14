import "../App.css";
import Item from "./Item";

function ItemList({ products }) {
    if (products.length === 0) {
        return <p>No product available</p>
    }
    return (
        <>
            <h2>{products.length} Product avaliable</h2>
            <div className="item-list">
                {products.map((product) => (
                    <Item product={product} key={product.id} />
                ))}
            </div>
        </>
    );
}

export default ItemList;