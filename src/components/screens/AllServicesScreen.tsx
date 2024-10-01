import { TAllServicesScreen } from "@/typing/screens.type";
import { FC, PropsWithChildren } from "react";
import { AllProductsService } from "../sections/allProductsService/AllProductsService";
import { Hero } from "../sections/hero/Hero";
import { SiteServices } from "../sections/siteServices/SiteServices";


interface IAllServicesScreen {
  content: TAllServicesScreen;
}

export const AllServiceScreen: FC<PropsWithChildren<IAllServicesScreen>> = ({
  content,
}) => {

  return (
    <>
      <Hero
        basicContent={content.hero.basic}
        productContent={content.hero.infoProduct}
        serviceContent={content.hero.infoService}
        advertisementContent={content.hero.infoAdvertisement}
        webdewContent={content.hero.infoWebdev}
        pathname={content.url}
      />
      {content.detialServicesAdvertusement && <AllProductsService productsConent={content.detialServicesAdvertusement} />}
      {content.detialServicesWebdev && <SiteServices />}
      {content.detialServicesPromotion && <AllProductsService productsConent={content.detialServicesPromotion}/>}
      {content.detialServicesSeo && <AllProductsService productsConent={content.detialServicesSeo} formVisible={true} />}
    </>
  );
};
