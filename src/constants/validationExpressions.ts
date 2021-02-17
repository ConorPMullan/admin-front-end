interface ValidationExpressionTypes {
  PASSWORD: RegExp;
}

const VALIDATION_EXPRESSIONS: ValidationExpressionTypes = {
  PASSWORD: /^(?=.*\d)(?=.*[A-Z]).{8,20}$/,
};

export default VALIDATION_EXPRESSIONS;
