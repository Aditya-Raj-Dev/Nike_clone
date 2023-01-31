import React, { useState } from "react";
import "./navbar.css";
import { useToast } from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Drawernavbar } from "./Drawernavbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetLogoutSuccess } from "../../Redux/Authreducer/action";
import { useEffect } from "react";
import { SearchProduct } from "../../Redux/Appreducer/Product/action";

const Navbar = () => {
  const cred = useSelector((state) => state.authReducer);
  const product=useSelector((state)=>state.ProductReducer.prod)
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

   
      
   useEffect(()=>{
   const prod=product.filter((item)=>{
    return item.title.toLowerCase()===searchTerm.toLowerCase()
   })
   console.log(prod)
  
   },[searchTerm,product.length])
    


  return (
    <div>
      <div className="nav1">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg"
          alt=""
          height="30px"
        />
        <div
          style={{ display: "flex", gap: "2rem", marginTop: "-0px" }}
          className="navlog"
        >
          {cred.signup ? (
            ""
          ) : (
            <p onClick={() => navigate("/signup")}>Join Us</p>
          )}
          {cred.isAuth ? (
            <div style={{ display: "inline-flex", gap: "3rem" }}>
              <h2>Welcome {cred.user} </h2>
              <p onClick={() => dispatch(GetLogoutSuccess(toast))}>Logout</p>
            </div>
          ) : (
            <p onClick={() => navigate("/login")}>Sign In</p>
          )}
        </div>
      </div>
      <div className="navbar">
        <img
          src="https://www.freeiconspng.com/thumbs/nike-logo/logo-brand-nike-png-10.png"
          alt=""
          height="40px"
          width="100px"
          onClick={() => navigate("/")}
        />
        {/* 1st div */}
        <div className="navbarprod">
          <h3 onClick={() => navigate("/men")}>Men</h3>
          <h3 onClick={() => navigate("/women")}>Women</h3>
          <h3 onClick={() => navigate("/kids")}>Kids</h3>
        </div>

        {/* 2nd div */}
        <div className="navbarcart">
          <input placeholder=" Search" size="sm" className="navsearch"  onChange={(e) => setSearchTerm(e.target.value)} />
          <BiHeart fontSize="30px" className="circle" />
          <HiOutlineShoppingBag
            fontSize="29px"
            className="circle"
            onClick={() => navigate("/cart")}
          />
        </div>
        <div className="hamburger">
          <Drawernavbar />
        </div>
      </div>
      {/* marquee */}
      <br />
      {/* <div className='marquee'>
       <marquee><h4>Hello Nike App</h4></marquee>
   
       </div> */}
      <br />
      {/* filter Buttons */}
    </div>
  );
};

export default Navbar;
