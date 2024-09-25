import { FC, ReactNode } from "react";
import { ComplexForm } from "./complexForm/ComplexForm";
import { FaqForm } from "./faqForm/FaqForm";

import { FormProviders } from "./FormProviders";
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
  text?: string | ReactNode;
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
  if (!Object.values(FORM_TYPE).includes(formType)) {
    console.warn(`Invalid formType: ${formType}`);
    return null;
  }

  const RenderForm = () => {
    switch (formType) {
      case FORM_TYPE.STEP_FORM:
        return <StepForm subServices={subServices} />;
      case FORM_TYPE.MAIN_FORM:
        return <MainForm title={title} text={text} />;
      case FORM_TYPE.COMPLEX_FORM:
        return <ComplexForm title={title} text={text} />;
      case FORM_TYPE.SING_UP_FORM:
        return <SingUpFrom />;
      case FORM_TYPE.FAQ_FORM:
        return <FaqForm areaVisible={areaVisible} title={title} text={text} />;
      default:
        return null;
    }
  };

  return (
    <FormProviders>
      <RenderForm />
    </FormProviders>
  );
};
