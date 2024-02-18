import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader.jsx";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider.jsx";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

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

            <input type='text'></input>
            <BsSearch size={38} />
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
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => (user ? auth.signOut() : null)}>
                      Sign Out
                    </span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>

                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to='/orders'>
              <p>returns</p>
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
