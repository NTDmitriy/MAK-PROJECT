"use client";

import { CONTACTS_PUBLIC } from "@/config/contact.config";
import { FC } from "react";
import { useCookies } from "react-cookie";
import { SeconderyButton } from "../buttons/seconderyButton/SeconderyButton";
import { Container } from "../container/Container";
import style from "./CookieBaner.module.css";

export const CookieBaner: FC = () => {
  const [cookies, setCookie] = useCookies(["cookieBaner"]);

  const giveCookei = () => {
    setCookie("cookieBaner", true, { path: "/" });
  };

  return (
    <>
      <div className={style.root}>
        <Container>
          <div className={style.cookie__wrapper}>
            <div className={style.cookie__text}>
              <p>
                Мы используем файлы cookies для улучшения работы нашего сайта и
                персонализации контента. Продолжая пользоваться сайтом, вы
                соглашаетесь с нашей{" "}
                <a
                  target="_blank"
                  className={style.cookie__link}
                  href={CONTACTS_PUBLIC.PRIVACY_POLICY}
                >
                  политикой использования cookies
                </a>
                .
              </p>
            </div>
            <div className={style.btn__wrapper}>
              <SeconderyButton type="button" onClick={giveCookei}>
                Понятно
              </SeconderyButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
