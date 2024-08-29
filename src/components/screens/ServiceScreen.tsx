import { Hero } from "@/components/sections/hero/Hero";
import { THeroInfoService } from "@/interfaces/types/block/products.type";
import { TServiceScreen } from "@/interfaces/types/screens/screens.type";
import { FC, PropsWithChildren } from "react";
import { AllProductsService } from "../sections/allProductsService/AllProductsService";
import { AllProductsWebdevService } from "../sections/allProductsService/AllProductsWebdevService";
import { HowWorksSites } from "../sections/howWorksSites/HowWorksSites";
import { SupplementaryDescr } from "../sections/supplementaryDescr/SupplementaryDescr";
import { WhyUsServices } from "../sections/whyUsServices/WhyUsServices";

interface IServiceScreen {
	content: TServiceScreen;
}

export const ServiceScreen: FC<PropsWithChildren<IServiceScreen>> = ({
	content,
}) => {
	return (
		<>
			<Hero
				basicContent={content.hero.basic}
				serviceContent={content.hero.info as THeroInfoService}
			/>
			{content.supplementaryDescr && <SupplementaryDescr suppContent={content.supplementaryDescr} />}
			{content.products && <AllProductsService productsConent={content.products} />}
			{content.productsWebdev && <AllProductsWebdevService productsConent={content.productsWebdev} />}
			{content.howWorksSites ? <HowWorksSites /> : <WhyUsServices />}
			{/*<Projects cases={content.projects} />
			<Reviwes reviwes={content.reviwes} />
			<Faq faq={content.faq} /> */}
		</>
	);
};
