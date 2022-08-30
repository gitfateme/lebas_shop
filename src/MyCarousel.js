import React, { useEffect, useState } from "react";
import "./styles/MyCarousel.scss";

function MyCarousel({ children, infiniteLoop }) {
  const [currentIndex, setCurrentIndex] = useState(children.length);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(infiniteLoop);
  const [transitionEnabled, setTransitionEnabled] = useState(false);

  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop);
  }, [children, infiniteLoop]);

  useEffect(() => {
    if (!transitionEnabled) {
      setCurrentIndex(length);
    }
  }, [transitionEnabled, length]);

  function next() {
    if (currentIndex === length) {
      setTransitionEnabled(true);
      setCurrentIndex((prevState) => prevState + 1);
    } else if (currentIndex > length * 2) {
      setCurrentIndex(length);
    } else if (isRepeating || currentIndex < length * 2 - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  }

  function prev() {
    if (currentIndex === length) {
      setTransitionEnabled(true);
      setCurrentIndex((prevState) => prevState - 1);
    } else if (currentIndex <= 0) {
      setCurrentIndex(length);
    } else if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }

  function handleTouchStart(e) {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(e) {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }
    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }

  function handleTransitionEnd() {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
      } else if (currentIndex === length * 2) {
        setTransitionEnabled(false);
      } else {
        return;
      }
    }
  }

  function renderExtraPrev() {
    let output = [];
    for (let index = 0; index < length; index++) {
      output.push(children[length - 1 - index]);
    }

    return output.reverse();
  }

  function renderExtraNext() {
    let output = [];
    for (let index = 0; index < length; index++) {
      output.push(children[index]);
    }
    return output;
  }

  useEffect(() => {
    const interval = setInterval(() => next(), 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="mycarousel-container container">
      <div className="mycarousel-wrapper">
        <button className="left-arrow" onClick={prev}>
          &lt;
        </button>
        <div
          className="mycarousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTransitionEnd={handleTransitionEnd}
        >
          <div
            className="mycarousel-content"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: transitionEnabled ? undefined : "none",
            }}
          >
            {isRepeating && renderExtraPrev()}
            {React.Children.map(children, (child) => {
              return child;
            })}
            {isRepeating && renderExtraNext()}
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
