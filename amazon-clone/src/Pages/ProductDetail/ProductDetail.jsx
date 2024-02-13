import React, { useEffect, useState } from "react";
import classes from "./product.module.css";
import LayOut from "../../Components/LayOut/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { productUrl } from "../../Api/endPoints";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
