import { PrimaryButton } from "@/components/ui/buttons/primaryButton/PrimaryButton";
import { Container } from "@/components/ui/container/Container";
import { FORM_TYPE, FormController } from "@/components/ui/forms/FormController";
import { Popup } from "@/components/ui/modals/popup/Popup";
import { Section } from "@/components/ui/section/Section";
import { BlockTitle } from "@/components/ui/titles/titleBlock/BlockTitle";
import { IGenericElementProps } from "@/interfaces/elements.interface";
import { TServiceWebdevProducts } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./AllProductsService.module.css";

interface IAllProductsWebdevService extends IGenericElementProps {
	productsConent: TServiceWebdevProducts[];
}

export const AllProductsWebdevService: FC<PropsWithChildren<IAllProductsWebdevService>> = ({
	className,
	productsConent,
	...rest
}) => {

	return (
		<>
			{productsConent && (
				<Section className={className} {...rest}>
					<BlockTitle
						leftSide={true}
					>
						Виды сайтов, мы разрабатываем:
					</BlockTitle>
					<Container>
						<ul className={styles.list}>
							{productsConent &&
								productsConent.map((item, index) => (
									<li key={index} className={styles.item}>
										<img
											className={styles.img}
											src={`/images/services/${item.image}.webp`}
											alt={item.name}
											title={item.name}
										/>
										<div className={styles.descr}>
											{item.name && (
												<h4 className={clsx(styles.title, styles.web)}>{item.name}</h4>
											)}
											{item.description && (
												<p className={styles.text}>{item.description}</p>
											)}
											<Popup
												initComponent={
													<PrimaryButton >
														{item.buttonText ? <>{item.buttonText}</> : <>Узнать подробнее</>}
													</PrimaryButton>
												}
												contentComponent={
													<FormController
														formType={FORM_TYPE.COMPLEX_FORM}
														title={item.buttonText}
													/>
												}
											/>

											<p className={styles.deadline}>{item.deadline}</p>
										</div>
									</li>
								))}
						</ul>
					</Container>
				</Section>
			)}
		</>
	);
};
