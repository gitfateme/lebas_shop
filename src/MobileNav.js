import React from "react";
import "./styles/MobileNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function MobileNav() {
  return (
    <div className="MobileNav">
      <div className="mobile-tabs">
        <a className="mobile-tab-wrapper" href="/">
          <FontAwesomeIcon icon={faUser} className="mobile-icon" />
          <span>ورود</span>
        </a>
        <a className="mobile-tab-wrapper" href="/">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="mobile-icon" />
          <span>جستجو</span>
        </a>
        <a className="mobile-tab-wrapper position-relative" href="/">
          <FontAwesomeIcon icon={faCartShopping} className="mobile-icon" />
          <span>سبد خرید</span>
          <div className="mobile-cart-notif">۰</div>
        </a>
        <a className="mobile-tab-wrapper" href="/">
          <FontAwesomeIcon icon={faBars} className="mobile-icon" />
          <span>دسته‌بندی‌ها</span>
        </a>
        <a className="mobile-tab-wrapper" href="/">
          <FontAwesomeIcon icon={faHome} className="mobile-icon" />
          <span>خانه</span>
        </a>
      </div>
    </div>
  );
}

export default MobileNav;
