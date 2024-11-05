import React from "react";
import LogWhite from "../assets/img/logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between">
        {/* logo */}
        <a href="/">
          <img src={LogWhite} alt="" />
        </a>
        Copyright &copy; 2024. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
