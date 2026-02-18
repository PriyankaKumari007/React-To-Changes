import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
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