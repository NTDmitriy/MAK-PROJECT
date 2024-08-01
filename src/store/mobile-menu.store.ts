import { IDashboardItem } from "@/config/urlConfig/all-pages.config";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IMobileMenu {
  open: boolean;
  openSubMenu: boolean;
  subMenuContent: IDashboardItem | null;
  handleOpen: () => void;
  handleClose: () => void;
  handleOpenSubMenu: (newSubMenuContent: IDashboardItem) => void;
  handleCloseSubMenu: () => void;
}

export const useMobileMenu = create(
  devtools<IMobileMenu>((set) => ({
    open: false,
    openSubMenu: false,
    subMenuContent: null,
    handleOpen: () => set({ open: true }),
    handleOpenSubMenu: (newSubMenuContent) => {
      set({ subMenuContent: newSubMenuContent });
      setTimeout(() => {
        set({ openSubMenu: true });
      });
    },
    handleCloseSubMenu: () => {
      set({ openSubMenu: false });
      setTimeout(() => {
        set({ subMenuContent: null });
      }, 300);
    },

    handleClose: () =>
      set({ open: false, subMenuContent: null, openSubMenu: false }),
  }))
);
