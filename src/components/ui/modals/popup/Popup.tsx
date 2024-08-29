"use client";

import { useStopScroll } from "@/hooks/useStopScroll";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import {
	cloneElement,
	FC,
	ReactElement,
	ReactNode,
	useEffect,
	useState,
} from "react";
import { createPortal } from "react-dom";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./Popup.module.css";

interface IPopup extends IGenericElementProps {
  initComponent: ReactNode;
  contentComponent: ReactNode;
}

export const Popup: FC<IPopup> = ({ initComponent, contentComponent }) => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const portalContainer = typeof window !== "undefined" ? document.body : null;
  const inertContent =
    typeof window !== "undefined" ? document.body.querySelector(".page") : null;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 300);
  };

  useEffect(() => {
    if (open) {
      inertContent?.setAttribute("inert", "");
      setTimeout(() => setAnimate(true), 10);
    } else {
      inertContent?.removeAttribute("inert");
    }
  }, [open]);

  useStopScroll(open);

  return (
    <>
      {cloneElement(initComponent as ReactElement, {
        onClick: handleClickOpen,
      })}

      {open &&
        portalContainer &&
        createPortal(
          <div className={clsx(styles.drawer, animate ? styles.open : "")}>
            <div className={styles.content}>
              <button className={styles.close} onClick={handleClose} >
                <DynamicSvg name="IconClose" width={"30px"} height={"30px"} />
              </button>
              {contentComponent}
            </div>
            <div onClick={handleClose} className={styles.backdrop}></div>
          </div>,
          portalContainer
        )}
    </>
  );
};
