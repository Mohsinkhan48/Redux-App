import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui inverted segment" style={{position:"fixed", zIndex:"333", width:"100%"}}>
      <div className="ui inverted secondary pointing menu">
        <div className="ui container">
          <Link to="/" className="header item">
            {/* <img src="/path-to-logo/logo.png" alt="Logo" className="ui mini image" /> */}
            <span>My Portfolio</span>
          </Link>
          <Link to="/" className="item">Home</Link>
          <Link to="/" className="item">About</Link>
          <Link to="/" className="item">Projects</Link>
          <Link to="/" className="item">Blog</Link>
          <Link to="/" className="item">Contact</Link>
          <div className="right item">
            <div className="ui action input">
              <input type="text" placeholder="Search..." />
              <button className="ui button">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
