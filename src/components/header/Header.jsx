import React from "react";
import ME from "../../assets/riyead-2.png";
import CTA from "./CTA";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>MUHAMMAD RIYEAD RAHMAN</h1>
        <h5 className='text-light'>Fullstack Developer</h5>

        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
