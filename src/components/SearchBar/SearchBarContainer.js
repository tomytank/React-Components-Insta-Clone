// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const styles = {fontSize: '40px'};
const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fa fa-instagram" style= {styles}/>
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social" style= {styles} >
          <i className="fa fa-compass" />
        </div>
        <div className="social" style= {styles}>
          <i className="fa fa-heart" />
        </div>
        <div className="social" style= {styles}>
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
