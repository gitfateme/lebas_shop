import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { MyCarousel, MyCarouselItem } from "./MyCarousel";
import carouselImg1 from "./images/carousel-1.jpg";
import carouselImg2 from "./images/carousel-2.jpg";
import carouselImg3 from "./images/carousel-3.jpg";

function Header() {
  let carouselImages = [carouselImg1, carouselImg2, carouselImg3];
  return (
    <div className="Header row">
      <div className="colored-top-bar">
        <h1 className="text-center pt-3"> فروشگاه لباس مینو</h1>
        <nav className="d-none d-md-flex nav container bg-light mt-5 col-10 col-lg-8 align-items-center justify-content-between px-4">
          <div className="d-flex align-items-cente flex-row-reverse">
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
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="ms-5 logo-icon"
            >
              <FontAwesomeIcon icon={faCrown} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              محصولات
            </a>
          </div>
        </nav>
        <MyCarousel>
          {carouselImages.map((carouselImg, index) => {
            return (
              <MyCarouselItem number={index + 1}>{carouselImg}</MyCarouselItem>
            );
          })}
        </MyCarousel>
      </div>
    </div>
  );
}

export default Header;
