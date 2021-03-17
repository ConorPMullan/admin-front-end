import { cleanup, fireEvent } from '@testing-library/react';
import ProductDetailsForm from './';
import { TestUtils } from '@test-utils';

afterEach(cleanup);
const tabDetails = 'product-form-details-tab';
const tabLongDescription = 'product-form-long-description-tab';
const tabIngredients = 'product-form-ingredients-tab';
const tabGuaranteedAnalysis = 'product-form-guaranteed-analysis-tab';

const fieldItemNumber = 'product-form-item-number';
const fieldName = 'product-form-name';
const fieldUpc = 'product-form-upc';
const fieldUm = 'product-form-um';
const fieldBrand = 'product-form-brand';
const fieldSize = 'product-form-size';
const fieldEdlp = 'product-form-edlp';

const fieldLongDescription = 'product-form-long-description';
const fieldIngredients = 'product-form-ingredients';
const fieldGuaranteedAnalysis = 'product-form-guaranteed-analysis';

describe('ProductDetailsForm Tests', () => {
  test('default rendering of the ProductDetailsForm shows details tab', async () => {
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductDetailsForm />
    );
    expect(getByTestId(tabDetails)).toBeInTheDocument();
    expect(getByTestId(tabLongDescription)).toBeInTheDocument();
    expect(getByTestId(tabIngredients)).toBeInTheDocument();
    expect(getByTestId(tabGuaranteedAnalysis)).toBeInTheDocument();
    expect(queryByTestId(fieldItemNumber)).toBeInTheDocument();
    expect(queryByTestId(fieldLongDescription)).toBeNull();
    expect(queryByTestId(fieldIngredients)).toBeNull();
    expect(queryByTestId(fieldGuaranteedAnalysis)).toBeNull();
  });

  test('ProductDetailsForm - Selecting Long Description tab renders components', async () => {
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductDetailsForm />
    );

    const tabButtonLongDescription = getByTestId(tabLongDescription);
    fireEvent.click(tabButtonLongDescription);

    expect(queryByTestId(fieldLongDescription)).toBeInTheDocument();
    expect(queryByTestId(fieldIngredients)).toBeNull();
    expect(queryByTestId(fieldGuaranteedAnalysis)).toBeNull();
  });

  test('ProductDetailsForm - Selecting Ingredients tab renders components', async () => {
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductDetailsForm />
    );

    const tabButtonIngredients = getByTestId(tabIngredients);
    fireEvent.click(tabButtonIngredients);

    expect(queryByTestId(fieldLongDescription)).toBeNull();
    expect(queryByTestId(fieldIngredients)).toBeInTheDocument();
    expect(queryByTestId(fieldGuaranteedAnalysis)).toBeNull();
  });

  test('ProductDetailsForm - Selecting Guaranteed Analysis tab renders components', async () => {
    const { getByTestId, queryByTestId } = TestUtils.render(
      <ProductDetailsForm />
    );

    const tabButtonGuaranteedAnalysis = getByTestId(tabGuaranteedAnalysis);
    fireEvent.click(tabButtonGuaranteedAnalysis);

    expect(queryByTestId(fieldLongDescription)).toBeNull();
    expect(queryByTestId(fieldIngredients)).toBeNull();
    expect(queryByTestId(fieldGuaranteedAnalysis)).toBeInTheDocument();
  });
});
