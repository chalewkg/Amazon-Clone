import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import classes from "./results.module.css";
import Layout from "../../Components/LayOut/Layout";
import Loader from "../../Components/Loader/Loader";
import ProductCard from "../../Components/Product/ProductCard";

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsloading(false);
        // console.log("API response:", res.data);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });

    // console.log(`${productUrl}/products/${categoryName}`);
  }, []);

  // console.log("Results state:", results);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}> Results</h1>
        <p style={{ padding: "30px" }}> Category /{categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}
export default Results;
