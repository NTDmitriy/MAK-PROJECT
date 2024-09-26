"use client";

import { CookieBaner } from "@/components/ui/coockie/CookieBaner";
import { processUTMParams } from "@/utils/utm";
import { SnackbarProvider } from "notistack";
import { PropsWithChildren, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const Providers = ({ children }: PropsWithChildren) => {
  const [cookies] = useCookies(["cookieBaner"]);
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
    processUTMParams();
  }, []);


  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
      >
        {children}
      </SnackbarProvider>
      {!cookies.cookieBaner && isClient && <CookieBaner />}
    </>
  );
};
