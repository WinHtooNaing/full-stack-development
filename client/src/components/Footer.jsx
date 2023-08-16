import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer className="footer-container" >
        <p className='footer-copyright'><i>Copyright &copy; 2022-2023 by our Data. All Rights Reserved.</i></p>
        <div className="logo-container">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-tiktok"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="condition">
          <a href="#">FAQs</a>--
          <a href="#">Privacy Policy</a>--
          <a href="#">Terms & Conditions</a>--
          <a href="#">Web Assessibility Statement</a>
        </div>
        <p className="personal">Design and Content by <a href="http://winhtoonaing.github.io/personal-portfolio">Win Htoo Naing</a></p>
        <p className="follow">follow me <a href="https://github.com/WinHtooNaing"><i className="fa-brands fa-github"></i></a></p>
      
       
      </footer>
    </>
  );
};

export default Footer;
