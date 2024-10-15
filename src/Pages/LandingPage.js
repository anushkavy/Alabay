import { useEffect, useState, useRef } from "react";
import mainDog from "../Images/landing-page-header.png";

export default function LandingPage() {
  const [isScrollable, setIsScrollable] = useState(false);
  const mainDivRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainDiv = mainDivRef?.current;

      const mainDivPosition = mainDiv?.getBoundingClientRect().top;
      const threshold = 0.1 * window.innerHeight;

      if (mainDivPosition <= threshold + 1) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`landing-page-main ${isScrollable ? "scrollable" : ""}`}
      ref={mainDivRef}
    >
      <div className="landing-page-container">
        <div className="top-rectangle"></div>
        <header className="header">
          <div className="bg-triangle"></div>

          <img src={mainDog} alt="Happy Alabay Dog" />
          <div className="landing-page-content">
            <h1>
              History Of<span className="heading-white"> ALABAY</span>
            </h1>
            <p>
              The Central Asian Shepherd Dog, also known as Alabay, has been a
              guardian of livestock and property for centuries. Originating from
              Central Asia, these dogs are renowned for their courage, strength,
              and loyalty.
            </p>
          </div>
        </header>

        <div className="all-photos-slider">
          <div className="all-photos-slider-tabs">
            <h4 className="slider-tab">ALL</h4>
            <h4 className="slider-tab">PHOTOS</h4>
            <h4 className="slider-tab">VIDEOS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
