import React, { useState } from "react";
import "./style.css";

const NavBar = (props) => {
  const onSubmitSearch = (e) => {
    e.preventDefault();
    alert("Search");
  };

  const openSearch = () => {
    setSearch(true);
  };

  const [search, setSearch] = useState(false);

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <li className="navbar">
      <ul className="navbarMenu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Posts</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={onSubmitSearch}>
          <input type="text" placeholder="Search" className={searchClass} />
          <img
            src={require("../../assets/icons/search.png")}
            alt="Search"
            className="searchIcon"
            onClick={openSearch}
          />
        </form>
      </div>
    </li>
  );
};

export default NavBar;
