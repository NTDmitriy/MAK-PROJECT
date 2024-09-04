import { Container } from "@/components/ui/container/Container";
import { DynamicSvg, TSvgMapKeys } from "@/components/ui/dynamicSvg/DynamicSvg";
import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TProjectTeam } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import { BlockTitle } from "../../ui/titles/titleBlock/BlockTitle";
import styles from "./ProjectTeam.module.css";

interface IProjectTeam extends IGenericElementProps {
  projectTeamContent: TProjectTeam[];
}

export const ProjectTeam: FC<PropsWithChildren<IProjectTeam>> = ({
  projectTeamContent,
  className,
  ...rest
}) => {
  return (
    <>
      {projectTeamContent && (
        <Section>
          <BlockTitle
            leftSide={true}
            descrBottom={
              "Создание успешного сайта требует слаженной работы опытных специалистов. Наша проектная команда состоит из профессионалов, каждый из которых отвечает за важный аспект разработки и обеспечивает высокое качество результата."
            }
          >
            Проектная команда
          </BlockTitle>
          <Container>
            <ul className={styles.list}>
              {projectTeamContent.map((item, list) => (
                <li key={list} className={styles.item}>
                  <div className={styles.icon}>
                    <DynamicSvg name={item.icon as TSvgMapKeys} />
                  </div>
                  <h5 className={styles.title}>{item.name}</h5>
                  <p className={styles.descr}>{item.descr}</p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}
    </>
  );
};
