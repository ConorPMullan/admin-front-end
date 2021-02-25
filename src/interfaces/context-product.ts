import IProductFilter from './product-filter';

export default interface IProductContext {
  isProductDataLoading: boolean;
  setProductLoading: (isLoading: boolean) => void;
  productFilter: IProductFilter;
  updateProductFilter: (productFilter: IProductFilter) => void;
  clearProductFilter: () => void;
}
