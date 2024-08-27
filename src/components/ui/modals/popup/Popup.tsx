"use client";
import { useStopScroll } from "@/hooks/useStopScroll";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { Dialog, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import {
	cloneElement,
	FC,
	forwardRef,
	ReactElement,
	ReactNode,
	Ref,
	useState,
} from "react";
import { DynamicSvg } from "../../dynamicSvg/DynamicSvg";
import styles from "./Popup.module.css";

interface IPopup extends IGenericElementProps {
  initComponent: ReactNode;
  contentComponent: ReactNode;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Popup: FC<IPopup> = ({ initComponent, contentComponent }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useStopScroll(open);

  return (
    <>
      {cloneElement(initComponent as ReactElement, {
        onClick: handleClickOpen,
      })}

      <Dialog
        sx={{
          "& .MuiBackdrop-root": {
            backgroundColor: "var(--background-loyout)",
            webkitBackdropFilter: "blur(8px)",
            backdropFilter: "blur(8px)",
          },
          "& .MuiPaper-root": {
            maxWidth: "unset",
            marginLeft: "16px",
            marginRight: "16px",
          },
        }}
        open={open}
        TransitionComponent={Transition}
        disableScrollLock={true}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.content}>
          <button className={styles.close} onClick={handleClose}>
            <DynamicSvg name="IconClose" width={"30px"} height={"30px"} />
          </button>
          {contentComponent}
        </div>
      </Dialog>
    </>
  );
};
