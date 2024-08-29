"use client";

import { Container } from "@/components/ui/container/Container";
import { FC, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Reviwe } from "@/components/ui/review/Reviwe";
import { IReviwes } from "../Reviwes";
import { NavigationButtons } from "./NavigationButtons";
import "./Slider.css";

export const Slider: FC<IReviwes> = ({ reviwes }) => {
  const sliderRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = (index: number) => {
    const totalSlides = reviwes.length;
    const progressPercentage = ((index + 1) / totalSlides) * 100;
    setProgress(progressPercentage);
  };

  return (
    <>
      {reviwes && (
        <>
          <Container>
            <NavigationButtons sliderRef={sliderRef} />
          </Container>

          <Swiper
            modules={[Mousewheel, Pagination]}
            slidesPerView={"auto"}
            initialSlide={3}
            speed={800}
            spaceBetween={0}
            breakpoints={{
              768: { spaceBetween: 20 },
            }}
            loop={true}
            loopAddBlankSlides={true}
            centeredSlides={true}
            roundLengths={true}
            mousewheel={true}
            grabCursor={true}
            watchSlidesProgress={true}
            ref={sliderRef}
            onSlideChange={(swiper) => {
              updateProgress(swiper.realIndex);
            }}
          >
            {reviwes.map((item, index: number) => (
              <SwiperSlide key={index} className={"slide"}>
                <div className="reviwe__wrapper">
                  <Reviwe reviwe={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="progressbar">
            <div
              className="progressbar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </>
      )}
    </>
  );
};
