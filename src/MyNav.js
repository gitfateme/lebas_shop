import React, { useState } from "react";
import "./styles/MyNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCrown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function MyNav() {
  const [searchToggle, setSearchToggle] = useState(false);

  function toggleSearch(e) {
    e.preventDefault();
    setSearchToggle(!searchToggle);
  }

  if (!searchToggle) {
    return (
      <div className="MyNav container">
        <nav className=" d-none  d-md-flex nav container mt-5 align-items-center justify-content-between px-4 ">
          <div className="d-flex align-items-center flex-row-reverse ">
            <a href="/" className="ms-4 icon" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a href="/" className="ms-5 icon">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="/">عضویت</a>
            <span className="main-nav-divider"></span>
            <a href="/">وارد شوید</a>
          </div>
          <div className="d-flex align-items-center flex-row-reverse">
            <a href="/" className="ms-5 logo-icon">
              <FontAwesomeIcon icon={faCrown} />
            </a>
            <a href="/">محصولات</a>
          </div>
        </nav>
      </div>
    );
  } else if (searchToggle) {
    return (
      <div className="MyNav container ">
        <nav className=" d-none  d-md-flex nav container mt-5 align-items-center justify-content-between px-4">
          <form className="search-wrapper">
            <button type="submit" className="search-btn btn btn-primary">
              جستجو
            </button>
            <div className="search-input-wrapper ">
              <input dir="rtl" placeholder="نام محصول"></input>
            </div>
            <FontAwesomeIcon
              icon={faXmark}
              className="xmark"
              onClick={toggleSearch}
            />
          </form>
          <div className="d-flex align-items-center flex-row-reverse">
            <a href="/" className="ms-5 logo-icon">
              <FontAwesomeIcon icon={faCrown} />
            </a>
            <a href="/">محصولات</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyNav;
