import { Container } from "@/components/ui/container/Container";
import { Section } from "@/components/ui/section/Section";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TSupplementaryDescr } from "@/interfaces/types/block/products.type";
import { FC, PropsWithChildren } from "react";
import styles from "./SupplementaryDescr.module.css";

interface ISuplementaryDescr extends IGenericElementProps {
	suppContent: TSupplementaryDescr
}


export const SupplementaryDescr: FC<PropsWithChildren<ISuplementaryDescr>> = ({
	suppContent,
	className,
	...rest
}) => {
	const { title, image, descr } = suppContent

	return (
		<Section className={className} {...rest}>
			<Container>
				<div className={styles.root}>
					<img className={styles.img} src={`/images/services/${image}`} alt="1" />
					<div className={styles.descr}>
						<h4 className={styles.title}>{title}</h4>
						<p className={styles.text}>
							{descr}
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
};
