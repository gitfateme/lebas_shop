// import React, { useEffect, useState } from "react";
// import "./styles/MyCarousel.scss";

// //https://www.w3schools.com/howto/howto_js_slideshow.asp
// //https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

// export const MyCarouselItem = ({ children, number }) => {
//   console.log(children);
//   return (
//     <div className="slideshow-item">
//       <div className="slide-number">{number} / 3</div>
//       <img src={children} alt="Clothes" className="carousel-image img-fluid" />
//     </div>
//   );
// };

// export function MyCarousel({ children }) {
//   const [activeIndex, setActiveIndex] = useState(0);

//   function updateIndex(newIndex) {
//     if (newIndex < 0) {
//       newIndex = React.Children.count(children) - 1;
//     } else if (newIndex >= React.Children.count(children)) {
//       newIndex = 0;
//     }

//     setActiveIndex(newIndex);
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       updateIndex(activeIndex + 1);
//     }, 5000);

//     return () => {
//       if (interval) {
//         clearInterval(interval);
//       }
//     };
//   });

//   return (
//     <div className="MyCarousel">
//       <div className="sildeshow-container text-center">
//         <div
//           className="slideshow-inner"
//           style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//         >
//           {React.Children.map(children, (child, index) => {
//             return React.cloneElement(child);
//           })}
//         </div>
//         <div className="d-flex justify-content-between">
//           <a
//             className="slide-prev"
//             href="/"
//             onClick={(e) => {
//               e.preventDefault();
//               updateIndex(activeIndex - 1);
//             }}
//           >
//             &#10094;
//           </a>
//           <a
//             className="slide-next"
//             href="/"
//             onClick={(e) => {
//               e.preventDefault();
//               updateIndex(activeIndex + 1);
//             }}
//           >
//             &#10095;
//           </a>
//         </div>
//         <div className="text-center">
//           {React.Children.map(children, (child, index) => {
//             return (
//               <span
//                 className={`${
//                   index === activeIndex ? "active slide-dot" : "slide-dot"
//                 } `}
//                 onClick={() => {
//                   updateIndex(index);
//                 }}
//               ></span>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

//https://dev.to/rakumairu/simple-react-carousel-24m0
import React, { useEffect, useState } from "react";
import "./styles/MyCarousel.scss";

function MyCarousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  function next() {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }

  function prev() {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }

  return (
    <div className="mycarousel-container">
      <div className="mycarousel-wrapper">
        <button className="left-arrow" onClick={prev}>
          &lt;
        </button>
        <div className="mycarousel-content-wrapper">
          <div
            className="mycarousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {React.Children.map(children, (child) => {
              return child;
            })}
          </div>
        </div>
        <button className="right-arrow" onClick={next}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default MyCarousel;
