"use client";

import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC } from "react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { DynamicSvg } from "../../../ui/dynamicSvg/DynamicSvg";
import styles from "./TariffSlider.module.css";

interface ITariffSlider extends IGenericElementProps {
  items: string[];
  onTabClick: (index: number) => void;
  activeTab: number;
}

export const TariffSlider: FC<ITariffSlider> = ({
  items,
  onTabClick,
  activeTab,
}) => {
  return (
    <>
      <Swiper
        className={styles.slider}
        slidesPerView={"auto"}
        speed={800}
        spaceBetween={10}
        breakpoints={{
          768: { spaceBetween: 20 },
        }}
        loop={false}
        rewind={true}
        centeredSlides={false}
        roundLengths={true}
        grabCursor={true}
      >
        {items &&
          items.map((item, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <button
                className={clsx(
                  styles.btn,
                  activeTab === index && styles.active
                )}
                onClick={() => onTabClick(index)}
                inert={activeTab === index ? "" : undefined}
              >
                {item}
                {item === 'ПРЕМИУМ' && <DynamicSvg name="IconShield" className={styles.shield}/>}
                
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};
