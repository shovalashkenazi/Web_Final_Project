import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="/images/blog-1.jpg" className="img-fluid" alt="#" />
        </div>

        <div className="blog-content">
          <p className="date"> 15 Jul, 2023</p>
          <h5 className="title">Shoval Ashkenazi</h5>
          <p className="desc">
            ########################## ##########################
            ##########################
          </p>

          <Link src="" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
