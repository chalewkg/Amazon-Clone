import React, { useContext } from "react";
import classes from "./payment.module.css";
import Layout from "../../Components/LayOut/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";

import ProductCard from "../../Components/Product/ProductCard";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(user);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <Layout>
      {/* header */}
      <div className={classes.payment__header}>
        {" "}
        Checkout ({totalItem}) items
      </div>
      {/* payment method */}
      <section className={classes.payment}>
        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div> Chicago, IL</div>
          </div>
        </div>
        <hr />
        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        {/* card from */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div />
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
