import React from "react";
import Carousel from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import Layout from "../../Components/LayOut/Layout";
import ProductDetail from "../ProductDetail/ProductDetail";

function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <ProductDetail />
    </Layout>
  );
}

export default Landing;
