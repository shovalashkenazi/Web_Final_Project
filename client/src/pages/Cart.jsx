import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { ProductContext } from "../context/product-context";
import { AiFillDelete } from "react-icons/ai";

export const Cart2 = () => {
  const [grid, setGrid] = useState(4);
  const { cart, cartTotal, purchaseCart } = useContext(ProductContext);

  const navigate = useNavigate();

  const handleBuyNow = async () => {
    try {
      await purchaseCart();

      alert("Purchased successfully");
      navigate("/");
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  };

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrum title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1"> Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {cart.map((cartItem) => {
                return (
                  <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          alt=""
                          className="img-fluid"
                          src={cartItem.product.imgUrl}
                        ></img>
                      </div>
                      <div className="w-75">
                        <h5 className="title">{cartItem.product.name}</h5>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price"> ${cartItem.product.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div className="width">
                        <input
                          className="form-control quenty"
                          placeholder={cartItem.quantity}
                        />
                      </div>
                      <div>
                        <AiFillDelete />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        $ {cartItem.product.price * cartItem.quantity}
                      </h5>
                    </div>
                  </div>
                );
              })}
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between ">
                  <Link to="/store" className="button">
                    Continue Shopping{" "}
                  </Link>
                </div>

                <div className="d-flex flex-column align-items-end">
                  <h4>Subtotal : ${cartTotal.toLocaleString(undefined)}</h4>
                  <p> Taxes and shipping calculated at checkout</p>
                  <Link className="button" onClick={handleBuyNow}>
                    Checkout{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart2;