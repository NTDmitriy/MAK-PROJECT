"use client";

import { useStopScroll } from "@/hooks/useStopScroll";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import clsx from "clsx";
import { FC, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IconClose } from "../../icons";
import styles from "./Popup.module.css";

interface IPopup extends IGenericElementProps {
  initComponent: ReactNode;
  contentComponent: ReactNode;
}

export const Popup: FC<IPopup> = ({ initComponent, contentComponent }) => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => setOpen(false), 300);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimate(true), 10);
    }
  }, [open]);

  useStopScroll(open);

  return (
    <>
      <button className={styles.init_button} onClick={handleClickOpen}>
        {initComponent}
      </button>

      {open &&
        createPortal(
          <div className={clsx(styles.drawer, animate ? styles.open : "")}>
            <div className={styles.content}>
              <button onClick={handleClose} className={styles.close}>
                <IconClose width={"30px"} height={"30px"} />
              </button>
              {contentComponent}
            </div>
            <div onClick={handleClose} className={styles.backdrop}></div>
          </div>,
          document.body
        )}
    </>
  );
};

// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Slide from "@mui/material/Slide";
// import { TransitionProps } from "@mui/material/transitions";
// import * as React from "react";

// const Transition = React.forwardRef(function Transition(
//   props: TransitionProps & {
//     children: React.ReactElement<any, any>;
//   },
//   ref: React.Ref<unknown>
// ) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export function Popup() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Slide in alert dialog
//       </Button>
//       {open && (
//         <>
//           <Dialog
//             open={open}

//             keepMounted
//             onClose={handleClose}
//             aria-describedby="alert-dialog-slide-description"
//           >
//             <DialogTitle>{"Use Google's location service?"}</DialogTitle>
//             <DialogContent>
//               <DialogContentText id="alert-dialog-slide-description">
//                 Let Google help apps determine location. This means sending
//                 anonymous location data to Google, even when no apps are
//                 running.
//               </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Disagree</Button>
//               <Button onClick={handleClose}>Agree</Button>
//             </DialogActions>
//           </Dialog>
//         </>
//       )}
//     </>
//   );
// }
