import { Container } from "@/components/ui/container/Container";
import { SeconderyLinkButton } from "@/components/ui/links/seconderyLinkButton/SeconderyLinkButton";
import styles from "./Notfound.module.css";

export const Notfound = () => {
  return (
    <div className={styles.content}>
      <div className={styles.cloak__wrapper}>
        <div className={styles.cloak__container}>
          <div className={styles.cloak}></div>
        </div>
        <Container>
          <div className={styles.info}>
            <h1 className={styles.title}>404</h1>

            <h2>Страница не найдена</h2>
            <p>
              К сожалению, мы не можем найти запрашиваемую страницу. Возможно,
              она была перемещена или удалена. Пожалуйста, проверьте адрес или
              вернитесь на главную страницу.
            </p>

            <div className={styles.button__wrapper}>
              <SeconderyLinkButton href="/">Главная</SeconderyLinkButton>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
