import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import custom CSS for the footer

const Footer = () => {
  return (
    <div className="ui inverted vertical segment footer">
      <div className="ui container">
        <div className="ui stackable grid">
          <div className="four wide column">
            <h4 className="ui header">About</h4>
            <div className="ui link list">
              <Link to="/" className="item">About Us</Link>
              <Link to="/" className="item">Services</Link>
              <Link to="/" className="item">Contact</Link>
            </div>
          </div>

          <div className="four wide column">
            <h4 className="ui header">Quick Links</h4>
            <div className="ui link list">
              <Link to="/" className="item">Home</Link>
              <Link to="/" className="item">Projects</Link>
              <Link to="/" className="item">Blog</Link>
              <Link to="/" className="item">FAQ</Link>
            </div>
          </div>

          <div className="four wide column">
            <h4 className="ui header">Follow Us</h4>
            <div className="ui list">
              <a href="https://www.linkedin.com/in/mohsin-khan999/" className="item">
                <i className="facebook f icon"></i> Facebook
              </a>
              <a href="https://www.linkedin.com/in/mohsin-khan999/" className="item">
                <i className="twitter icon"></i> Twitter
              </a>
              <a href="https://www.linkedin.com/in/mohsin-khan999/" className="item">
                <i className="linkedin in icon"></i> LinkedIn
              </a>
            </div>
          </div>

          <div className="four wide column">
            <h4 className="ui header">Contact</h4>
            <div className="ui list">
              <div className="item">
                <i className="mail icon"></i> kmohsinkhan482@gmail.com
              </div>
              <div className="item">
                <i className="phone icon"></i> +923034780426
              </div>
              
            </div>
          </div>
        </div>

        <div className="ui horizontal divider">© 2024 Redux App</div>
      </div>
    </div>
  );
};

export default Footer;
