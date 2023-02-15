import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";

function Contact() {
  return (
    <>
      <Meta title={"Contact Us"}></Meta>
      <BreadCrum title={"Our Store"}></BreadCrum>
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="prop"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3383.6485454680983!2d34.73678190486296!3d31.997541595745517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sil!4v1674403060425!5m2!1sen!2sil"
                width="600"
                className="border-0 w-100"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-controll"
                        placeholder="name"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-controll"
                        placeholder="email"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-controll"
                        placeholder="Phone Number"
                      ></input>
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 formm-controll"
                        cols="30"
                        row="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="button">Submit</div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In touch with us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
