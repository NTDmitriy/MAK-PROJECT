import { Container } from "@/components/ui/container/Container";
import { TGenericElementProps } from "@/interfaces/elements.type";
import { THeroInfo } from "@/interfaces/types/block/products.type";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import styles from "./HeroInfoService.module.css";
interface IHeroInfoService extends TGenericElementProps {
	info: THeroInfo;
}

export const HeroInfoService: FC<PropsWithChildren<IHeroInfoService>> = ({
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
