import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle, AiFillFacebook } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      {/* 1st Div */}
      <div className="footerdiv1">
        <div>
          <h3>FIND A STORE</h3>
          <h3>BECOME A MEMBER</h3>
          <h3>SIGN UP FOR EMAIL</h3>
          <h3>SEND US FEEDBACK</h3>
          <h3>STUDENT DISCOUNTS</h3>
        </div>
        <div>
          <h3>GET HELP</h3>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Return</p>
          <p>Payment Options</p>
          <p>Contact Us on Nike.com Inquiries</p>
        </div>
        <div>
          <h3>ABOUT NIKE</h3>
          <p>News</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Sustainablity</p>
        </div>
      </div>
      {/* 2nd div */}
      <div className="footerdiv2">
        <AiFillTwitterCircle fontSize="39px" />
        <AiFillFacebook fontSize="39px" />
        <TiSocialYoutubeCircular fontSize="45px" />
        <BsInstagram fontSize="38px" />
      </div>
    </div>
  );
};

export default Footer;
