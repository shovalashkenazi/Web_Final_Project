import React, { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../context/product-context";

function ProductCard2({ grid, product, quantity }) {
  const { addToCart } = useContext(ProductContext);

  let location = useLocation();
  return (
    <div className={`gr-${grid}`}>
      <div className="product-card position-relative align-items-center">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="" />
          </Link>
        </div>
        <div className="product-image">
          <img src={product.imgUrl} className="img-fluid" alt="" />
        </div>
        <div className="product-details">
          <h6 className="brand">{product.name}</h6>
          <ReactStars
            count={5}
            size={24}
            value={product.rating}
            edit={false}
            activeColor="yellow"
          />
          <p className="description">
            description : <br /> {product.description} <br /> {product.category}
          </p>
          <p className="price">${product.price}</p>
          {quantity ? <p className="price">Quantity: {quantity}</p> : null}
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <div onClick={() => addToCart(product)}>
              <img src="/images/add-cart.svg" alt="" />
            </div>

            <Link>
              <img src="/images/view.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard2;
