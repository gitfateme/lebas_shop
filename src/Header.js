import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Header.scss";
import MyCarousel from "./MyCarousel";
import carouselImg1 from "./images/carousel-1.jpg";
import carouselImg2 from "./images/carousel-2.jpg";
import carouselImg3 from "./images/carousel-3.jpg";
import MobileNav from "./MobileNav";
import MyNav from "./MyNav";

function Header() {
  let carouselImages = [carouselImg1, carouselImg2, carouselImg3];
  return (
    <div className="Header row">
      <div className="colored-top-bar">
        <h1 className="text-center pt-3"> فروشگاه لباس مینو</h1>
        <MyNav />
        <MobileNav />
        <MyCarousel infiniteLoop={true}>
          {carouselImages.map((img, index) => {
            return <img src={img} key={index} alt="Carousel" />;
          })}
        </MyCarousel>
      </div>
    </div>
  );
}

export default Header;
