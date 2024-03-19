import React, { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import secondBanner from "../content/images/second-banner-fixed.png";
import $ from "jquery";
import ProductNav from "../nav/ProductNav";
import ProductNavMobile from "../nav/ProductNavMobile"

function Caorsuel({setProductDetail}) {
  const [displaySlides, setDisplaySlides] = useState(null);
  const [dim, setDim] = useState({width: null, height: null});
  let [clicked, setClicked] = useState(null);

  let slides = null;
  let height = null;

  const CustomPrevArrow = (props) => (
    <button
      className="fa fa-arrow-left text-white hover:text-slate-300 transform hover:scale-[3] transition-all ml-12 scale-[2.5]"
      onClick={() => refslide.current.slickPrev()}
    ></button>
  );
  const CustomNextArrow = (props) => (
    <button
      className="fa fa-arrow-right text-white hover:text-slate-300 transform hover:scale-[3] transition-all mr-12 scale-[2.5]"
      onClick={() => refslide.current.slickNext()}
    ></button>
  );

  const refslide = React.useRef();

  useEffect(() => {
    const elementHeight = $("#swrapper").height();
    const elementWidth = $("#swrapper").width();
    height = elementHeight;
  
    slides = [
      {
        classes: "bg-[#484848]",
        name: "1",
        content: (
          <video
            src={
              "https://cdn.shopify.com/videos/c/o/v/64199f56f8e84ef088d121ba28f87513.mp4"
            }
            className={`w-full object-fill`}
            style={{ height: `${height}px` }}
            autoPlay
            loop
            muted
            disablePictureInPicture
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
    setDim({width: elementWidth, height: elementHeight})
  }, []);

  let setting = {
    dots: false,
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
      <div className="w-4 h-4 mt-4 bg-[#484848] rounded-full active"></div>
    ),
  };
  function loadSlides() {
    setDisplaySlides(
      <SlideShow
        slides={slides}
        setting={setting}
        refslide={refslide}
        height={height}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-[1080px]:hidden">
      <ProductNav setProductDetail={setProductDetail}/>
      <ProductNavMobile setProductDetaail={setProductDetail}/>
      <div className="w-full h-[470px] bg-red-500" id="swrapper">
<div style={{width: `${dim.width}px`, height: `${dim.height}px`}} className="absolute z-[2] flex items-center justify-between">
      <CustomPrevArrow />
      <CustomNextArrow />
</div>
{displaySlides}
</div>
    </div>
  );
}

export default Caorsuel;

// This is the old contents of our return statement, I will leave the old functions just in case I decide to revert some of the old features.

