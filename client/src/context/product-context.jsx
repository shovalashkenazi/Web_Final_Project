import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { fetcher } from "../utils/fetcher";

const domain = "http://localhost:3001";

const getParams = (key, value) => (value ? `${key}=${value}&` : "");

export const ProductContext = React.createContext({
  products: [],
  cartTotal: 0,
  addToCart: () => {},
  purchaseCart: () => Promise.resolve(),
  addProduct: () => Promise.resolve(),
  getProducts: () => Promise.resolve(),
  deleteProduct: () => Promise.resolve(),
  editProduct: () => Promise.resolve(),
});

function getNewProducts(first, newBatch) {
  const exitingProductsIds = first.map((p) => p._id);
  const newProducts = newBatch.filter(
    (p) => !exitingProductsIds.includes(p._id)
  );
  return newProducts;
}

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [countByCategory, setCountByCategory] = useState();

  useEffect(() => {
    getProducts();
    getCountByCategory();
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        fetcher("/users/cart").then((cartItems) => setCart(cartItems));
      }
    });
  }, []);

  const getProducts = (amount = 50) => {
    fetch(`${domain}/products?amount=${amount}`)
      .then((res) => res.json())
      .then((products) => {
        setProducts((prevProducts) => {
          const newProducts = getNewProducts(prevProducts, products);
          return [...prevProducts, ...newProducts];
        });
      });
  };

  //Products
  const getProductsByQuery = (params) => {
    let queryString = "";
    for (const [key, value] of Object.entries(params)) {
      queryString += getParams(key, value);
    }
    fetch(`${domain}/products?${queryString}`)
      .then((res) => res.json())
      .then((products) => {
        setProducts((prevProducts) => {
          const newProducts = getNewProducts(prevProducts, products);
          return [...prevProducts, ...newProducts];
        });
      });
  };

  const addProduct = async (productData) => {
    const newProduct = await fetcher("/products", "post", productData);
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const editProduct = async (productData) => {
    const updatedProduct = await fetcher(
      `/products/${productData._id}`,
      "put",
      productData
    );
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      const index = updatedProducts.findIndex((p) => p._id === productData._id);
      updatedProducts[index] = updatedProduct;
      return updatedProducts;
    });
  };

  const deleteProduct = async (productId) => {
    await fetcher(`/products/${productId}`, "delete");
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p._id !== productId)
    );
  };

  const getCountByCategory = async () => {
    const count = await fetcher("/products/product-count-per-category");
    const sorted = {};
    for (const categoryCount of count) {
      sorted[categoryCount._id] = categoryCount.count;
    }
    setCountByCategory(sorted);
  };
  //

  // Cart
  const purchaseCart = async () => {
    const newOrder = await fetcher("/orders", "post", cart);
    console.log(newOrder);
    setCart([]);
  };
  const saveCart = async (user) => {
    const idToken = await user.getIdToken();
    const response = await fetch(`${domain}/users/cart/${user.uid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: idToken,
      },
      method: "post",
      body: JSON.stringify(cart),
    });

    if (response.status === 200) {
      console.log("cart saved");
    } else {
      console.error("error saving cart");
    }
  };

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user?.uid) {
      saveCart(user);
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((p) => p.product._id === product._id);
      if (index === -1) {
        return [...prevCart, { product, quantity: 1 }];
      }

      const updatedCart = [...prevCart];
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity + 1,
      };

      return updatedCart;
    });
  };

  const cartTotal = cart.reduce((total, cartItem) => total, 0);

  const value = {
    products,
    cart,
    cartTotal,
    addToCart,
    getProductsByQuery,
    purchaseCart,
    addProduct,
    getProducts,
    deleteProduct,
    editProduct,
    countByCategory,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}