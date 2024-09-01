import { Container } from "@/components/ui/container/Container";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { THeroInfoWebdev } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroInfoWebdev.module.css";
interface IHeroInfoWebdev extends IGenericElementProps {
  info: THeroInfoWebdev;
}

export const HeroInfoWebdev: FC<PropsWithChildren<IHeroInfoWebdev>> = ({
  className,
  info,
  ...rest
}) => {
  return (
    <>
      {info && (
        <div className={clsx(styles.background, className)} {...rest}>
          <Container>
            <ul className={styles.list}>
              {info.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span className={styles.opacity}>{item}</span>
                </li>
              ))} 
            </ul>
          </Container>
        </div>
      )}
    </>
  );
};
