import React from "react";
import Carousel from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import Layout from "../../Components/Layout/Layout";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
