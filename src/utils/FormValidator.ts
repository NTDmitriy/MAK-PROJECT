interface ValidationError {
  field: string;
  message: string;
}

export class FormValidator {
  private data: Record<string, string>;
  private errors: ValidationError[] = [];

  constructor(data: Record<string, string>) {
    this.data = data;
  }

  validateField(field: string, condition: boolean, message: string): void {
    if (!condition) {
      this.errors.push({ field, message });
    }
  }

  validatePhone(): void {
    const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\с*)?$/;
    const isValid = !!this.data.PHONE && phoneRegex.test(this.data.PHONE);
    this.validateField("PHONE", isValid, "Введите корректный номер телефона!!");
  }

  validate(): ValidationError[] {
    this.validatePhone();
    return this.errors;
  }
}
