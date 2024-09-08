"use client";

import { useStopScroll } from "@/hooks/useStopScroll";
import { IGenericElementProps } from "@/interfaces/elements.interface";
// import { usePopupStore } from "@/store/popup.store";
import { usePopupStore } from "@/store/popup.store";
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
  const { showPopup, openPopup, closePopup } = usePopupStore();

  useStopScroll(open);

  const portalContainer = typeof window !== "undefined" ? document.body : null;
  const inertContent =
    typeof window !== "undefined" ? document.body.querySelector(".page") : null;

  const handleClickOpen = () => {
    openPopup();
    setOpen(true);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      setOpen(false), closePopup();
    }, 300);
  };

  useEffect(() => {
    if (!showPopup) {
      handleClose();
    }
  }, [showPopup]);

  useEffect(() => {
    if (open) {
      inertContent?.setAttribute("inert", "");
      setTimeout(() => setAnimate(true), 10);
    } else {
      inertContent?.removeAttribute("inert");
      setAnimate(false);
    }

    return () => {
      inertContent?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    
  }, []);

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
              <button className={styles.close} onClick={handleClose}>
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
