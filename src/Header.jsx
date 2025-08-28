import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  

  return (
    <div className="fixed top-0 w-full z-50 h-20 bg-white pt-2 flex justify-between ">
      <img className="h-17 pl-40 " src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"/>
      <Link to="/cart/"><HiOutlineShoppingCart className="size-11 mr-40 my-2"/></Link>
      
      
    </div>
  );
}

export default Header
