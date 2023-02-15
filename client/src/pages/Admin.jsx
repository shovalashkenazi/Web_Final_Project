import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import { ProductContext } from "../context/product-context";
import { categoryNames, colors } from "../utils/constants";
import { Chart } from "./Chart";

const defaultProductData = {
  name: "",
  description: "",
  price: 0,
  imgUrl: "",
  category: categoryNames[0],
  color: colors[0],
};

export function Admin({ user }) {
  const { editProduct, addProduct, getProducts, products, deleteProduct } =
    useContext(ProductContext);

  const [editMode, setEditMode] = useState(false);
  const [productData, setProductData] = useState(defaultProductData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user?.isAdmin) {
      return navigate("/");
    }
    getProducts(99999);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await editProduct(productData);
      } else {
        await addProduct(productData);
      }
      setProductData(defaultProductData);
      setEditMode(false);
      alert("Added successfully");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  const handleEdit = (product) => {
    window.scrollTo(0, 0);
    setEditMode(true);
    setProductData(product);
  };

  const updateProductData = (e) => {
    setProductData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Meta title={"Admin"}></Meta>
      <BreadCrum title={"Admin"}></BreadCrum>
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">
                    {editMode ? "Edit" : "Add New"} Product
                  </h3>
                  <form
                    className="d-flex flex-column gap-15"
                    onSubmit={handleSubmit}
                    id="product-form"
                  >
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        name="name"
                        required
                        value={productData.name}
                        onChange={updateProductData}
                      ></input>
                    </div>

                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        required
                        name="price"
                        value={productData.price}
                        onChange={updateProductData}
                      ></input>
                    </div>
                    <div>
                      <select
                        form="product-form"
                        name="category"
                        className="w-100 form-control"
                        required
                        onChange={updateProductData}
                        value={productData.category}
                      >
                        {categoryNames.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        form="product-form"
                        name="color"
                        className="w-100 form-control"
                        required
                        onChange={updateProductData}
                        value={productData.color}
                      >
                        {colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="Image Url"
                        name="imgUrl"
                        value={productData.imgUrl}
                        onChange={updateProductData}
                      ></input>
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control"
                        cols="30"
                        required
                        row="4"
                        placeholder="Description"
                        name="description"
                        value={productData.description}
                        onChange={updateProductData}
                      ></textarea>
                    </div>
                    <button className="button">Submit</button>
                  </form>

                  <Chart />
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In touch with us</h3>
                  <div>
                    {products.map((product) => {
                      return (
                        <div key={product._id}>
                          <span>{product.name}</span>
                          <button onClick={() => handleEdit(product)}>
                            Edit
                          </button>
                          <button onClick={() => deleteProduct(product._id)}>
                            Delete
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
