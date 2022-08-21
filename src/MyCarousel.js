import React, { useEffect, useState } from "react";
import "./styles/MyCarousel.scss";

//https://www.w3schools.com/howto/howto_js_slideshow.asp
//https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

export const MyCarouselItem = ({ children, number }) => {
  console.log(children);
  return (
    <div className="slideshow-item">
      <div className="slide-number">{number} / 3</div>
      <img src={children} alt="Clothes" className="carousel-image img-fluid" />
    </div>
  );
};

export function MyCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="MyCarousel">
      <div className="sildeshow-container text-center">
        <div
          className="slideshow-inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child);
          })}
        </div>
        <div className="d-flex justify-content-between">
          <a
            className="slide-prev"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              updateIndex(activeIndex - 1);
            }}
          >
            &#10094;
          </a>
          <a
            className="slide-next"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              updateIndex(activeIndex + 1);
            }}
          >
            &#10095;
          </a>
        </div>
        <div className="text-center">
          {React.Children.map(children, (child, index) => {
            return (
              <span
                className={`${
                  index === activeIndex ? "active slide-dot" : "slide-dot"
                } `}
                onClick={() => {
                  updateIndex(index);
                }}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
