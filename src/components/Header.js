import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg h-12 ">
      <div className="w-16">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex">
        <ul className="flex p-4 m-4">
          <li className="p-5"><Link to="/">Home</Link></li>
          <li className="p-5"><Link to="/about">About Us</Link></li>
          <li className="p-5"><Link to="/contact">Contact Us</Link></li>
          <li className="p-5">Cart-{cartItems.length}Items</li>
           <button className="login-btn" onClick={
          ()=>{
            btnName===("Login")? setBtnName("Logout"): setBtnName("Login");
          }
        }>{btnName}</button>
        </ul>
       
      </div>
    </div>
  );
};

export default Header;