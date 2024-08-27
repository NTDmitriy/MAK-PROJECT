import { enqueueSnackbar } from "notistack";

interface INotification {
  message: string;
  variant: "success" | "error" | "warning" | "info" | "default";
}

type TUseNotification = (message: string, variant: INotification["variant"]) => void;

export const useNotification: TUseNotification = (message, variant) => {
  enqueueSnackbar(`${message}`, { variant });
};
