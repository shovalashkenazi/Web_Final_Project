import React from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
//ariel
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
