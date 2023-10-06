import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideShow({ slides, setting, refslide, elementHeight }) {
  return (
    <Slider ref={refslide} {...setting}>
      {slides.map((slide) => (
        <button
          className={`${slide.classes} h-[${elementHeight}px] w-full z-[2]`}
          onClick={() => {
            window.open("about:blank");
          }}
        >
          {slide.content}
        </button>
      ))}
    </Slider>
  );
}

export default SlideShow;
