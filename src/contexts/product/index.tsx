import React from 'react';
import { IProductContext, IProductFilter } from '@interfaces';

const ProductContext = React.createContext<IProductContext | null>(null);

const ProductProvider: React.FC<React.ReactNode> = ({ children }) => {
  const initialFilter: IProductFilter = {};
  const [productFilter, setProductFilter] = React.useState<IProductFilter>(
    initialFilter
  );

  const [isProductDataLoading, setLoading] = React.useState<boolean>(true);

  const updateProductFilter = (newProductFilter: IProductFilter) => {
    setProductFilter(newProductFilter);
  };

  const clearProductFilter = () => {
    setProductFilter(initialFilter);
  };

  const setProductLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <ProductContext.Provider
      value={{
        isProductDataLoading,
        setProductLoading,
        productFilter,
        updateProductFilter,
        clearProductFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default { ProductContext, ProductProvider };
