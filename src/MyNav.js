import React from "react";
import "./styles/MyNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";

function MyNav() {
  return (
<div className="MyNav">
<nav className=" d-none  d-md-flex nav container mt-5 align-items-center justify-content-between px-4">
      <div className="d-flex align-items-center flex-row-reverse ">
        <a href="/" className="ms-4 icon">
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
}

export default MyNav;
