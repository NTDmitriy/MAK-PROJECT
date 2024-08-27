import { ALL_CASES_CONTENT } from "@/config/content-config/cases/all-cases.config";
import { allReviwes } from "@/config/content-config/reviwes/reviwes.config";
import {
	TCases,
	TDetialServices,
	THero,
	THeroBasic,
	THeroInfo,
	TReviwe,
} from "@/interfaces/types/block/products.type";
import { TProductScreen } from "@/interfaces/types/screens/screens.type";
import { MEDICAL_DETAIL } from "./medical-detail.config";

export const MEDICAL_CONFIG = {
  hero: {
    basic: {
      title: {
        accentText: "привлечение пациентов и рост доверия",
        text: "Продвижение медицинских учреждений: ",
        accentOrder: 1,
      },
      description:
        "Увеличьте количество пациентов и улучшите репутацию вашего медицинского учреждения с помощью наших комплексных маркетинговых решений. Мы знаем, как сделать вашу клинику заметной и востребованной.",
      image: "promotion-medical-hero",
    } satisfies THeroBasic,
    info: {
      title: "Продвижение для медицинских учреждений",
      description:
        "Современные медицинские учреждения сталкиваются с высокой конкуренцией и растущими ожиданиями пациентов. Для привлечения новых пациентов и поддержания доверия необходимо использовать эффективные маркетинговые стратегии. Наша команда специалистов помогает медицинским учреждениям разрабатывать и внедрять индивидуальные решения, направленные на повышение видимости, улучшение репутации и увеличение числа записей на прием. Мы предлагаем комплексный подход, который включает в себя SEO, контент-маркетинг, SMM и PPC-рекламу, чтобы обеспечить стабильный рост вашего медицинского бизнеса.",
      image: "promotion-medical-hero-info",
    } satisfies THeroInfo,
  } satisfies THero,
  detialServices: MEDICAL_DETAIL satisfies TDetialServices,
  projects: ALL_CASES_CONTENT.toArray() satisfies TCases[],
  reviwes: allReviwes satisfies TReviwe[],
} satisfies TProductScreen;
