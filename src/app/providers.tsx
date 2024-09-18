"use client";

import { CookieBaner } from "@/components/ui/coockie/CookieBaner";
import { SnackbarProvider } from "notistack";
import { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";

export const Providers = ({ children }: PropsWithChildren) => {
  const [cookies] = useCookies(["cookieBaner"]);

  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={2000}
      >
        {children}
      </SnackbarProvider>
      {!cookies.cookieBaner && <CookieBaner />}
    </>
  );
};
