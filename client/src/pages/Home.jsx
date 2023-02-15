import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/product-context";
import { categories } from "../utils/constants";

function Home() {
  const { countByCategory } = useContext(ProductContext);
  return (
    <>
      <section className="home-warpper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className=" main-banner position-relative">
                <img
                  src="/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main bannerr"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button"> BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className=" small-banner position-relative">
                  <img
                    src="/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannerr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sake</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className=" small-banner position-relative ">
                  <img
                    src="/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannerr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className=" small-banner position-relative">
                  <img
                    src="/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannerr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className=" small-banner position-relative ">
                  <img
                    src="/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main bannerr"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy iPad Air</h5>
                    <p>
                      From $999.00
                      <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center mb-2 text-decoration-underline">
              <h1> Categories</h1>
            </div>
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                {categories.map((category) => {
                  return (
                    <div
                      key={category.name}
                      className="d-flex gap-30 align-items-center"
                    >
                      <div>
                        <Link to={`/store/${category.name}`}>
                          <h6>{category.name}</h6>
                          {countByCategory
                            ? countByCategory[category.name] + " items"
                            : null}
                        </Link>
                      </div>
                      <Link to={`/store/${category.name}`}>
                        <img src={category.imgUrl} alt={category.name} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading"> Our Popular Product </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
