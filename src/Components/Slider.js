import { useState, useRef } from "react";
import ArrowRight from "../Svgs/ArrowRight.svg";

export default function Slider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const visibleGalleryRef = useRef(null);
  const slidesPerClick = 3;
  const totalSlides = data.slides.length;

  function handleNextClick() {
    setCurrentSlide((prevState) => {
      const nextSlide = (prevState + slidesPerClick) % totalSlides;
      if (nextSlide === 0) {
        visibleGalleryRef.current.scrollLeft = 0;
      }

      return nextSlide;
    });
    if (visibleGalleryRef.current) {
      const scrollAmount = visibleGalleryRef.current.clientWidth;
      visibleGalleryRef.current.scrollLeft += scrollAmount; // Scroll to the right
    }
  }

  return (
    <div className="slider-main">
      <div className="slide-images-div" ref={visibleGalleryRef}>
        {data.slides.map((slide) => {
          return (
            <img
              src={slide.src}
              alt={slide.alt}
              className="slide-image"
              key={slide.id}
            />
          );
        })}
      </div>
      <button className="slider-next-btn" onClick={handleNextClick}>
        <img
          src={ArrowRight}
          alt="Next button"
          className="slider-next-btn-icon"
        />
      </button>
    </div>
  );
}
