import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IMobileMenuStorage {
  menuOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  dropdownIndex: number | null;
  setDropdownIndex: (index: number) => void;
}

export const useMobileMenu = create(
  devtools<IMobileMenuStorage>((set) => ({
    menuOpen: false,
    handleOpen: () => set({ menuOpen: true }),
    handleClose: () => set({ menuOpen: false }),
    dropdownIndex: null,
    setDropdownIndex: (index: number | null) => set({ dropdownIndex: index }),
  }))
);
