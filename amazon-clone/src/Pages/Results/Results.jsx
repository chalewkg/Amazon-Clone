import React, { useEffect, useState } from "react";
import classes from "./results.module.css";
import Layout from "../../Components/LayOut/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";

// function Results() {
//   const { categoryName } = useParams();
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/${categoryName}`)
//       .then((res) => {
//         setResults(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     console.log(`${productUrl}/products/${categoryName}`);
//   }, []);

//   return (
//     <Layout>
//       <section>
//         <h1 style={{ padding: "30px" }}> Results</h1>
//         <p style={{ padding: "30px" }}> Category /{categoryName}</p>
//         <hr />

//         <div className={classes.products_container}>
//           {results?.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Results;

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`${productUrl}/products/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        console.log("API response:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(`${productUrl}/products/${categoryName}`);
  }, [categoryName]);

  console.log("Results state:", results);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}> Results</h1>
        <p style={{ padding: "30px" }}> Category /{categoryName}</p>
        <hr />

        <div className={classes.products_container}>
          {Array.isArray(results) ? (
            results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
export default Results;
