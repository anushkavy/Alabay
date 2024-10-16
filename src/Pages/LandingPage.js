import { useEffect, useState, useRef } from "react";
import Slider from "../Components/Slider";
import { data } from "../Data/SliderFirst";
import ProjectVisionBg from "../Svgs/ProjectVisionBg.svg";

export default function LandingPage() {
  const [isScrollable, setIsScrollable] = useState(false);
  const mainDivRef = useRef(null);
  const headerImageRef = useRef(null);
  const projectVisionImgRef = useRef(null);
  const [headerImageHeight, setHeaderImageHeight] = useState(null);
  const [projectVisionImageHeight, setProjectVisionImageHeight] =
    useState(null);

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

  useEffect(() => {
    const handleHeaderImageHeight = () => {
      setHeaderImageHeight(
        headerImageRef?.current?.getBoundingClientRect().height
      );
    };

    const handleProjectVisionImageHeight = () => {
      setProjectVisionImageHeight(
        projectVisionImgRef?.current?.getBoundingClientRect().height
      );
    };

    handleHeaderImageHeight();
    handleProjectVisionImageHeight();

    window.addEventListener("resize", () => {
      handleHeaderImageHeight();
      handleProjectVisionImageHeight();
    });

    return () => {
      window.removeEventListener("resize", () => {
        handleHeaderImageHeight();
        handleProjectVisionImageHeight();
      });
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

          <img
            src="Images/landing-page-header.png"
            alt="Happy Alabay Dog"
            className="header-image"
            ref={headerImageRef}
          />
          <img
            src="Images/landing-page-header-reflection.png"
            alt="Happy Alabay Dog Reflection"
            className="header-image-reflection"
            style={{
              top: headerImageHeight,
            }}
          />
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
            <h4 className="slider-tab selected">PHOTOS</h4>
            <h4 className="slider-tab">VIDEOS</h4>
          </div>
          <Slider data={data} />
        </div>

        <div className="project-vision-main">
          <h1 className="heading-orange">PROJECT VISION</h1>
          <img
            src="Images/landing-page-project-vision.png"
            alt="Many dogs"
            className="project-vision-animals"
            ref={projectVisionImgRef}
          />
          <img
            src="Images/landing-page-project-vision-reflection.png"
            alt="Many dogs reflection"
            className="project-vision-animals-reflection"
            style={{
              top: projectVisionImageHeight,
            }}
          />
          {console.log("project vision image height", projectVisionImageHeight)}
          <img
            src={ProjectVisionBg}
            alt="background"
            className="project-vision-bg"
          />
          <p>
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </p>
        </div>

        <div className="roadmap-main">
          <h1 className="heading-white">ROADMAP</h1>
          <div className="roadmap-container">
            <div className="roadmap-content">
              <p>
                Our journey is just beginning. Explore our roadmap to see the
                exciting milestones and future plans we have in store.
              </p>
              <span>Join us as we grow and achieve new heights.</span>
            </div>
            <img
              src="Images/landing-page-roadmap.png"
              alt="Alabay on an exploration adventure with a map in hand"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
