import React from "react";
import { useNavigate } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { fetcher } from "../utils/fetcher";
import * as d3 from "d3";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        await fetcher("/users", "post", { uid: user.uid, email: user.email });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrum title="register" />

      <div className=" login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className=" auth-card">
              <h3 className=" text-center mb-3">Register</h3>
              <form
                className="d-flex flex-column gap-15"
                onSubmit={handleSubmit}
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
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control mt-3"
                  ></input>
                  <div>
                    <div className=" mt-3 d-flex justify-content-center gap-15 align-items-md-center">
                      <button className="button ">Register</button>
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
