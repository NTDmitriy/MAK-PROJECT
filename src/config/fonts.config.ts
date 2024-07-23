import { Inter, Roboto } from "next/font/google";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["cyrillic"],
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["cyrillic"],
});

