import React, { useEffect, useState } from 'react';
import { HttpStatusCodes } from '@constants';
import { IProduct, IProductFilter } from '@interfaces';
import { ProductService } from '@services';
import ProductTableComponent from './product-table-component';

interface ProductTableProps {
  isProductDataLoading: boolean;
  productFilter: IProductFilter;
  setProductLoading(isLoading: boolean): void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  isProductDataLoading,
  productFilter,
  setProductLoading,
}) => {
  const [cachedData, setCachedData] = useState<IProduct[][]>();
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [isPageLoading, setPageLoading] = useState<boolean>(false);

  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(25);
  const [totalElements, setTotalElements] = useState<number>(0);

  useEffect(() => {
    setPage(0);
    setCachedData([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productFilter]);

  useEffect(() => {
    if (cachedData && cachedData[page] !== undefined) {
      setProductData(cachedData[page]);
    } else if (!isPageLoading) {
      setPageLoading(true);
      ProductService.getProducts(page, pageSize, productFilter)
        .then((response) => {
          if (response.status === HttpStatusCodes.NO_CONTENT) {
            setTotalElements(0);
            setPage(0);
            setProductData([]);
          } else {
            const {
              page: { content, totalElements: localTotal },
            } = response.data;

            setTotalElements(localTotal);
            const localCache = cachedData
              ? cachedData.map((x) => x)
              : Array(localTotal).fill(undefined);
            localCache[page] = content;
            setCachedData(localCache);
            setProductData(content);
          }
        })
        .catch(() => {})
        .finally(() => {
          setPageLoading(false);
          setProductLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cachedData, page, pageSize]);

  const handlePageChange = (pageNumber: number, newPageSize: number): void => {
    // Return to first page and clear cache if the pageSize changes
    if (pageSize !== newPageSize) {
      setPage(0);
      setPageSize(newPageSize);
      setCachedData([]);
    } else {
      setPage(pageNumber);
    }
  };

  return (
    <ProductTableComponent
      pageNumber={page}
      pageSize={pageSize}
      totalElements={totalElements}
      productData={productData}
      isTableLoading={isProductDataLoading}
      isPageLoading={isPageLoading}
      onChangePage={handlePageChange}
    />
  );
};

export default ProductTable;
