import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader.jsx";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header_container}>
          {/* Logo section */}
          <div className={classes.logo_container}>
            <Link to='/'>
              <img
                src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon logo'
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p> Deliver to</p>
                <span> Ethiopia</span>
              </div>
            </div>
          </div>
          {/* Serach Section*/}
          <div className={classes.search}>
            <select name='' id=''>
              <option value=''>All</option>
            </select>

            <input type='text' name='' placeholder='Search Product'></input>

            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <Link to='/orders' className={classes.language}>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png'
                alt='American Flag'
              />
              <select name='' id=''>
                <option value=''>EN</option>
              </select>
            </Link>

            {/* Sign in */}
            <Link to='/auth'>
              <p>Sign In</p>

              <select name='' id=''>
                <option value='Account & Lists'>Account & Lists</option>
              </select>
            </Link>
            {/* orders */}
            <Link to='/orders'>
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to='/cart' className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
