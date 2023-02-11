import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <>
      <div className="col-3">
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-image">
            <img src="/images/watch.jpg" className="img-fluid" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Nike</h6>
            <h5 className="product-title">###############</h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="yellow"
            />
            <p>
              description : <br /> ############### ###############{" "}
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/add-cart.svg" alt="" />
              </Link>
              <Link>
                <img src="/images/prodcompare.svg" alt="" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
