import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function Product() {
  const [Product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section>
      <h1>Product</h1>

      {Product.map((singleProduct) => (
        <ProductCard product={singleProduct} />
      ))}
    </section>
  );
}

export default Product;
