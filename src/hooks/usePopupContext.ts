import { PopupContext } from "@/store/popup.store";
import { useContext } from "react";

export const usePopupContext = () => {
  return useContext(PopupContext);
};

 
