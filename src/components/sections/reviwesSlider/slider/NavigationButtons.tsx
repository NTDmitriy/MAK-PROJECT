import { FC } from "react";
import { DynamicSvg } from "../../../ui/dynamicSvg/DynamicSvg";
import "./Slider.css";

interface INavigationButtons {
  sliderRef: React.RefObject<any>;
}

export const NavigationButtons: FC<INavigationButtons> = ({ sliderRef }) => {
  const handleNext = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current && sliderRef.current.swiper) {
      sliderRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="custom-navigation">
      <button onClick={handlePrev} className="slider-button prev">
        <DynamicSvg name="IconRightArray" />
      </button>
      <button onClick={handleNext} className="slider-button next">
        <DynamicSvg name="IconRightArray" />
      </button>
    </div>
  );
};
