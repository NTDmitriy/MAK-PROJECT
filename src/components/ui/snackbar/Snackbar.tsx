"use client";

import { Button } from "@mui/material";
import { enqueueSnackbar, VariantType } from "notistack";

export const Snackbar = () => {



  const handleClickVariant = (variant: VariantType) => () => {
    enqueueSnackbar("This is a success message!", { variant });
  };


	
  // variant could be success, error, warning, info, or default
  // enqueueSnackbar("This is a success message!", { variant: "error" });

  return (
    <>
      <Button onClick={handleClickVariant("success")}>
        Show success snackbar
      </Button>
    </>
  );
};
