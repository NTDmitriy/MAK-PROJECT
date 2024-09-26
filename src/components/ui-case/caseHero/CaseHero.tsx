import { Box } from "@/components/ui/box/Box";
import { TGenericElementProps } from "@/typing/elements.type";
import { TCase } from "@/typing/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./CaseHero.module.css";
interface ICaseHero extends TGenericElementProps {
  heroContent: TCase;
}

export const CaseHero: FC<PropsWithChildren<ICaseHero>> = ({ heroContent }) => {
  const { name, description, categories, image } = heroContent;
  return (
    <Box>
      <div className={styles.root}>
        <div className={styles.content}>
          {categories && categories.length > 0 && (
            <ul className={styles.categories}>
              {categories.map((catergory, index) => (
                <li className={styles.category} key={index}>
                  {catergory}
                </li>
              ))}
            </ul>
          )}

          <h1 className={styles.title}>{name}</h1>
          <p className={styles.descr}>{description}</p>
        </div>
        <picture>
          <source
            srcSet={`/images/cases/${image}-medium.webp`}
            media="(max-width: 1024px)"
            width={700}
            height={400}
          />
          <img
            className={styles.img}
            src={`/images/cases/${image}-large.webp`}
            alt="Дмитрий Графов"
            width={1420}
            height={746}
          />
        </picture>
      </div>
    </Box>
  );
};
