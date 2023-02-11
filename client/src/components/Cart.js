import React from "react";
import BreadCrum from "./BreadCrum";
import Meta from "./Meta";
import { AiFillDelete } from "react-icons-ai";
import { Link } from "react-router-dom";

function Cart() {
  <>
    <Meta title={Cart} />
    <BreadCrum title="Cart" />

    <section>
      <div className="container-xxl">
        <div className="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1"> Price</h4>
                <h4 className="cart-col-2">Product</h4>
                <h4 className="cart-col-3">quantity</h4>
                <h4 className="cart-col-4">total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img className="img-fluid" src=""></img>
                  </div>
                  <div className="w-75">
                    <h5 className="title">dfg</h5>
                    <p className="size">sdfs</p>
                    <p className="color">sdfds</p>
                  </div>
                </div>
                <div className="cart-col-1">
                  <h5 className="price"> 100$</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      min={1}
                      max={10}
                      type="number"
                    ></input>
                  </div>
                  <div>
                    <AiFillDelete className="text-danger p-3 bg-secondary " />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price"> 100$</h5>
                </div>
              </div>
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between">
                  <Link className="button">Continue Shopping </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default Cart;
