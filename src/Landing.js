import React, { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import myVideo from "./content/videos/Arcade_Odyssey.mp4";
import secondBanner from "./content/images/second-banner-fixed.png";
import $ from "jquery";

function Landing() {
  const [displaySlides, setDisplaySlides] = useState(null);
  let height = null;
  let slides = null;

  const CustomPrevArrow = (props) => (
    <button
      className="z-[3] fa fa-arrow-left text-white hover:text-slate-300 transform hover:scale-[5.5] transition-all ml-12 scale-[4.0]"
      onClick={() => refslide.current.slickPrev()}
    ></button>
  );
  const CustomNextArrow = (props) => (
    <button
      className="z-[3] fa fa-arrow-right text-white hover:text-slate-300 transform hover:scale-[5.5] transition-all mr-12 scale-[4.0]"
      onClick={() => refslide.current.slickNext()}
    ></button>
  );

  const refslide = React.useRef();

  useEffect(() => {
    const elementHeight = $("#swrapper").height();
    const height = elementHeight;
    slides = [
      {
        classes: "bg-white",
        name: "1",
        content: (
          <video
            src={myVideo}
            className={`w-full object-fill`}
            style={{ height: `${height}px` }}
            autoPlay
            loop
            muted
            onClick={() => {}}
          />
        ),
      },
      {
        classes: "bg-black",
        name: "2",
        content: (
          <img
            src={secondBanner}
            className={`w-full object-fill`}
            style={{ height: `${height}px` }}
            onClick={() => {}}
          />
        ),
      },
    ];

    loadSlides();
  }, []);

  let setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    appendDots: (dots) => (
      <ul
        style={{
          height: "auto",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 mt-4 bg-white rounded-full active"></div>
    ),
  };
  function loadSlides() {
    setDisplaySlides(
      <SlideShow
        slides={slides}
        setting={setting}
        refslide={refslide}
        elementHeight={height}
      />
    );
  }

  return (
    <div className="z-10 flex flex-col items-center justify-center w-screen h-screen">
      <div className="w-full mt-24 h-5/6" id="swrapper">
        <div className="absolute flex items-center justify-between w-full h-full">
          <CustomPrevArrow />
          <CustomNextArrow />
        </div>
        {displaySlides}
      </div>
    </div>
  );
}

export default Landing;
