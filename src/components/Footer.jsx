import React from 'react';
import './footer.css';  // Import the CSS file for styling
{/* <script src="https://kit.fontawesome.com/2da4965ed5.js" crossorigin="anonymous"></script> */}
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>contact,socials</h2>
      <div className="social-media">
          <a href="https://github.com/Jaishu07"> <i class="fa-brands fa-square-github"></i>Github</a>
          <a href="https://www.linkedin.com/in/yashwantharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "> <i className="fab fa-facebook"></i>Linkedin</a>
          <a href="https://www.instagram.com/__jaishu_7/"> <i className="fab fa-facebook"></i>Instagram</a>
          <a href="https://x.com/yashwant11010?t=B7_WZSnIXt2O-RXtFcDQNw&s=09 "> <i className="fab fa-facebook"></i>X</a>
            
          
          
        </div>
        <p>&copy; 2024 My Website. All rights reserved.</p>

        
      </div>
    </footer>
  );
};

export default Footer;
