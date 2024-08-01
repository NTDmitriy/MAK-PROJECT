'use client'
import { useEffect, useState } from "react";

export const useStopScroll = (condition: boolean) => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const getScrollWidth = () => {
      let div = document.createElement("div");
      div.style.overflowY = "scroll";
      div.style.width = "50px";
      div.style.height = "50px";

      document.body.append(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;

      div.remove();
      return scrollWidth;
    };

    const width = getScrollWidth();
    setScrollWidth(width);
  }, []);

  useEffect(() => {
 
		const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollHeight !== 0) {
      document.body.style.overflowY = condition ? "hidden" : "auto";
      document.body.style.paddingRight = condition ? `${scrollWidth}px` : "0px";
    }
  }, [condition, scrollWidth]);
};

