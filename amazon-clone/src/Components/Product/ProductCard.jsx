import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat.jsx/CurrencyFormat";
import classes from "./product.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDesc }) {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  console.log(state);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div className={`${classes.card_container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>

      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating.rate} precision={0.1} />
          {/* count */}
          <small>{rating.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
