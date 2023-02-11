import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import io from "socket.io-client";
import { ProductContext } from "../context/product-context";
const socket = io.connect("http://localhost:3001");

const auth = getAuth();
function Header({ user }) {
  const [onlineUsers, setOnlineUsers] = useState(0);
  const { cart, cartTotal } = useContext(ProductContext);
  const [_, loading] = useAuthState(auth);

  useEffect(() => {
    socket.on("counter", (count) => {
      setOnlineUsers(count);
    });
  }, []);

  return (
    <>
      <header className="header-upper py-3">
        <div className=" container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white"> Shoval Project </Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center  justify-content-between">
                {user?.isAdmin ? (
                  <div>
                    <Link
                      to="/admin"
                      className=" d-flex align-items-center gap-10 text-white"
                    >
                      <img src="/images/compare.svg" alt="img" />
                      <p className="mb-0">
                        Admin <br /> Panel
                      </p>
                    </Link>
                  </div>
                ) : null}
                <div>
                  <Link className=" d-flex align-items-center gap-10 text-white">
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  {user ? (
                    <div
                      className="d-flex align-items-center gap-10 text-white"
                      onClick={() => signOut(auth)}
                    >
                      <img src="/images/user.svg" alt="user" />
                      <p className="mb-0">Logout</p>
                    </div>
                  ) : loading ? (
                    <div className="d-flex align-items-center gap-10 text-white">
                      <img src="/images/user.svg" alt="user" />
                      <p className="mb-0">Loading...</p>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className=" d-flex align-items-center gap-10 text-white"
                    >
                      <img src="/images/user.svg" alt="user" />
                      <p className="mb-0">Login</p>
                    </Link>
                  )}
                </div>
                <div>
                  <Link
                    to="/cart"
                    className=" d-flex align-items-center gap-10 text-white"
                  >
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {cart.length}
                      </span>
                      <p className="mb-0">$ {cartTotal}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header-Bottom */}
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="header-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img className="g" src="/images/menu.svg" alt="" />

                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-items text-white" to="">
                          Action
                        </Link>
                      </li>

                      <li>
                        <Link className="dropdown-items text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-items text-white " to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className=" d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Store">Our Store</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                  </div>
                </div>
                <div className="connected-shoppers">
                  Connected shoppers: {onlineUsers}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
