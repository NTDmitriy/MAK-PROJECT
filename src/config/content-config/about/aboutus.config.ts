
import { TReviwe } from "@/interfaces/types/block/products.type";
import { TUsefulScreen } from "@/interfaces/types/screens/screens.type";
import { ALL_REVIWES } from "../reviwes/reviwes.config";

 
export const ABOUT_US_CONFIG = {
  reviwes: ALL_REVIWES satisfies TReviwe[],
} satisfies TUsefulScreen;
