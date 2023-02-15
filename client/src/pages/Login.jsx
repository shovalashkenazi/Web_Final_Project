import React from "react";
import { Link } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/store");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <Meta title={"Login2"} />
      <BreadCrum title="login" />

      <div className=" login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className=" auth-card">
              <h3 className=" Aa text-center mb-3">Login</h3>
              <form
                className="d-flex flex-column gap-10"
                onSubmit={handleLogin}
              >
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="mt-1">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>

                  <div>
                    <div className="mt-5 d-flex justify-content-center gap-15 align-items-md-center">
                      <button className="button ">Login</button>
                      <Link to="/register" className="button ">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
