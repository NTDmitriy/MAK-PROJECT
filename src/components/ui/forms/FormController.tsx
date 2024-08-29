import { FC } from "react";
import { ComplexForm } from "./complexForm/ComplexForm";
import { FaqForm } from "./faqForm/FaqForm";
import { HookFormProvider } from "./HookFormProvider";
import { MainForm } from "./mainForm/MainForm";
import { SingUpFrom } from "./singUpFrom/SingUpFrom";
import { StepForm } from "./stepForm/StepForm";

export enum FORM_TYPE {
	STEP_FORM = "StepForm",
	MAIN_FORM = "MainForm",
	COMPLEX_FORM = "ComplexForm",
	SING_UP_FORM = "SingUpFrom",
	FAQ_FORM = "FaqForm",
}

export interface IFormContent {
	title?: string;
	text?: string;
	areaVisible?: boolean;
	subServices?: string[];
}

interface IFormController extends IFormContent {
	formType: FORM_TYPE;
}

export const FormController: FC<IFormController> = ({
	formType,
	title,
	areaVisible,
	subServices,
	text,
}) => {
	return (
		<>
			{!Object.values(FORM_TYPE).includes(formType) ? null : (
				<HookFormProvider>
					{formType === FORM_TYPE.STEP_FORM && (
						<StepForm subServices={subServices} />
					)}
					{formType === FORM_TYPE.MAIN_FORM && (
						<MainForm title={title} text={text} />
					)}
					{formType === FORM_TYPE.COMPLEX_FORM && (
						<ComplexForm title={title} text={text} />
					)}
					{formType === FORM_TYPE.SING_UP_FORM && <SingUpFrom />}
					{formType === FORM_TYPE.FAQ_FORM && (
						<FaqForm areaVisible={areaVisible} />
					)}
				</HookFormProvider>
			)}
		</>
	);
};
