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

  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* Logo section */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
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
            <select name="" id="">
              <option value="">All</option>
            </select>

            {/* <select name="category" id="category">
              <option value="all">All</option>
               <optgroup label="Electronics">
                <option value="technology">Technology</option>
                <option value="appliances">Appliances</option>
              </optgroup>
              <optgroup label="Services">
                <option value="consulting">Consulting</option>
                <option value="repair">Repair Services</option>
              </optgroup>
              <optgroup label="Home & Garden">
                <option value="furniture">Furniture</option>
                <option value="decor">Home Decor</option>
              </optgroup> */}
            {/* </select> */}
            <input type="text" name="" placeholder="Search Product"></input>
            <BsSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order_container}>
            <Link to="/orders" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt="American Flag"
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* Sign in */}
            <Link to="/auth">
              <p>Sign In</p>

              <select name="" id="">
                <option value="Account & Lists">Account & Lists</option>
                {/* <optgroup label="Your Account">
                  <option value="">Account</option>
                  <option value="Order">Order </option>
                </optgroup>
                <optgroup label="Your List">
                  <option value="Shoping List">Shoping List</option>
                  <option value="Wish List">Whish List </option>
                </optgroup> */}
              </select>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>

      <LowerHeader />
    </>
  );
}

export default Header;
