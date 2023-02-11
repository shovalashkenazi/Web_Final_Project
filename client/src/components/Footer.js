import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex dap-30 align-items-center">
                <img src="/images/newsletter.png" alt="" />
                <h2 className=" mb-0 text-white"> Sign Up for Newsletter </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder=" Your Email Adress..."
                  aria-label=" Your Email Adress..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white py-2 fs-6 ">
                  <p> Country : Israel </p>
                  <p> City : Rishon Lezion</p>
                  <p> Address : Zalman Shazar 33 </p>
                  <p> PinCode : 757000 </p>
                  <p> Tel : +972 0505799977 </p>
                </address>

                <a className=" d-block text-white" href="tel: +972 0505799977">
                  ShovalAshkeanazi@gmail.com <br />
                  Yuval@gmail.com <br />
                  Ariel@gmail.com <br />
                </a>

                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#s">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#s">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a className="text-white" href="#s">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#s">
                    <BsLinkedin className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className=" text-white py-2 mb-1">Privacy Policy</Link>
                <Link className=" text-white py-2 mb-1">Refund Policy</Link>
                <Link className=" text-white py-2 mb-1">Shipping Policy</Link>
                <Link className=" text-white py-2 mb-1">Terms& Contitions</Link>
                <Link className=" text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className=" text-white py-2 mb-1">About Us</Link>
                <Link className=" text-white py-2 mb-1">Faq</Link>
                <Link className=" text-white py-2 mb-1">Tablets</Link>
                <Link className=" text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className=" text-white py-2 mb-1">Laptops</Link>
                <Link className=" text-white py-2 mb-1">Headephones</Link>
                <Link className=" text-white py-2 mb-1">Tablets</Link>
                <Link className=" text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className=" text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} ; Develop by - Shoval
                Ashkenazi -
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
