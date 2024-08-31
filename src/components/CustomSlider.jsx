import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "../styles/Slider.css"; // Custom styles

const items = [
  {
    src: "../../public/image1.webp",
    altText: "Slide 1",
    caption: "Slide 1 Caption",
  },
  {
    src: "../../public/image2.webp",
    altText: "Slide 2",
    caption: "Slide 2 Caption",
  },
  {
    src: "../../public/image3.webp",
    altText: "Slide 3",
    caption: "Slide 3 Caption",
  },
  {
    src: "../../public/image4.webp",
    altText: "Slide 4",
    caption: "Slide 4 Caption",
  },
];

const CustomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="slider-image" />
      </CarouselItem>
    );
  });

  return (
    <div className="slider-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default CustomSlider;
