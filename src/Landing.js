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
      className="z-[3] fa fa-arrow-left text-black hover:text-slate-300 transform hover:scale-[5.5] transition-all ml-12 scale-[4.0]"
      onClick={() => refslide.current.slickPrev()}
    ></button>
  );
  const CustomNextArrow = (props) => (
    <button
      className="z-[3] fa fa-arrow-right text-black hover:text-slate-300 transform hover:scale-[5.5] transition-all mr-12 scale-[4.0]"
      onClick={() => refslide.current.slickNext()}
    ></button>
  );

  const refslide = React.useRef();
  let setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const elementHeight = $("#swrapper").height();
    const height = elementHeight;

    console.log("elemheight", elementHeight);
    console.log("height", height);
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
      { classes: "bg-white", name: "3" },
      { classes: "bg-black", name: "4" },
    ];
    loadSlides();
  }, []);

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
    <div className="w-screen h-screen flex justify-center items-center z-10">
      <div className="h-3/4 w-full mt-10" id="swrapper">
        <div className="w-full h-full flex justify-between items-center absolute">
          <CustomPrevArrow />
          <CustomNextArrow />
        </div>
        {displaySlides}
      </div>
    </div>
  );
}

export default Landing;
