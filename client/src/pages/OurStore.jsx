import React, { useContext, useEffect, useMemo, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ProductCard2 from "../components/ProductCard2";
import { ProductContext } from "../context/product-context";
import { categoryNames, colors } from "../utils/constants";

function OurStore() {
  const [grid, setGrid] = useState(4);
  const { products, getProductsByQuery } = useContext(ProductContext);
  const { categoryId } = useParams();
  const [color, setColor] = useState();
  const [rating, setRating] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999);

  useEffect(() => {
    if (categoryId || color || rating) {
      getProductsByQuery({
        category: categoryId,
        color,
        rating,
        minPrice,
        maxPrice: 999999 !== maxPrice ? maxPrice : undefined,
      });
    }
  }, [categoryId, color, maxPrice, rating, minPrice]);

  const showenProducts = useMemo(() => {
    let filtered = products;
    if (categoryId) {
      filtered = filtered.filter((p) => p.category === categoryId);
    }
    if (color) {
      filtered = filtered.filter((p) => p.color === color);
    }
    if (rating) {
      filtered = filtered.filter((p) => p.rating === rating);
    }
    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= minPrice);
    }
    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    return filtered;
  });

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrum title={"Our Store"} />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    {categoryNames.map((category) => (
                      <li key={category}>
                        <Link to={`/store/${category}`}>{category}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3> Filter By</h3>
                <div>
                  <h5 className="sub-title">Rating</h5>
                  <div>
                    {[1, 2, 3, 4, 5].map((num) => {
                      return (
                        <div
                          key={num}
                          className="d-flex align-items-center"
                          onClick={() => setRating(num)}
                        >
                          <ReactStars
                            count={5}
                            size={24}
                            value={num}
                            edit={false}
                            activeColor="yellow"
                          />
                          <div> {num} Stars</div>
                        </div>
                      );
                    })}
                    <div onClick={() => setRating(null)}>Remove filter</div>;
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="From"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control py-1"
                        id="floatingInput"
                        placeholder="To"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors ps-0 ">
                      {colors.map((color) => (
                        <li
                          onClick={(e) => setColor(color)}
                          key={color}
                          style={{ backgroundColor: color }}
                        ></li>
                      ))}
                    </ul>
                    <div onClick={() => setColor()}>Remove filter</div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="bg-light badge text-secondary rounded-3 p-2 px-3">
                      Headphones
                    </span>
                    <span className="bg-light badge text-secondary rounded-3 p-2 px-3">
                      Laptop
                    </span>
                    <span className="bg-light badge text-secondary rounded-3 p-2 px-3">
                      Mobile
                    </span>
                    <span className="bg-light badge text-secondary rounded-3 p-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-4 d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        alt=""
                        src="/images/watch.jpg"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        alt=""
                        src="/images/watch.jpg"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block " style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabeticlay , A-Z
                      </option>
                      <option value="title-descending">
                        Alphabeticlay , Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Price, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0 ">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="/images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="/images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="/images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />

                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="/images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5   ">
                <div className="d-flex gap-10 flex-wrap ">
                  {showenProducts.map((product) => {
                    return (
                      <ProductCard2
                        key={product._id}
                        product={product}
                        grid={grid}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
