"use client";

import { FC } from "react";
import { useCookies } from "react-cookie";
import { SeconderyButton } from "../buttons/seconderyButton/SeconderyButton";
import { Container } from "../container/Container";
import styles from "./CookieBaner.module.css";

export const CookieBaner: FC = () => {
  const [cookies, setCookie] = useCookies(["cookieBaner"]);

  const giveCookei = () => {
    setCookie("cookieBaner", true, { path: "/" });
  };

  return (
    <>
      <div className={styles.root}>
        <Container>
          <div className={styles.cookie__wrapper}>
            <div className={styles.cookie__text}>
              <p>
              Продолжая пользоваться сайтом, вы соглашаетесь с нашей политикой использования cookies.
              </p>
            </div>
            <div className={styles.btn__wrapper}>
              <SeconderyButton type="button" onClick={giveCookei} className={styles.button}>
                Ок
              </SeconderyButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
