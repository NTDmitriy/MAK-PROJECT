import { create } from "zustand";

type IPopupStore = {
  showPopup: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

export const usePopupStore = create<IPopupStore>((set) => ({
  showPopup: false,
  openPopup: () => set({ showPopup: true }),
  closePopup: () => set({ showPopup: false }),
}));
