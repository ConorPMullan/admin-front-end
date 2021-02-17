import React, { useEffect, useState } from 'react';
import { Product as ProductConstants } from '@constants';
import { IProduct } from '@interfaces';
import { ProductService } from '@services';
import IPageable from 'src/interfaces/pageable';
import TablePagination from '../table-pagination';
import Title from '../../title';
import {
  MuiCircularProgress as CircularProgress,
  MuiProgress as Progress,
  MuiTable as Table,
  MuiTableBody as TableBody,
  MuiTableCell as TableCell,
  MuiTableHead as TableHead,
  MuiTableRow as TableRow,
  TableContainer,
} from './styled';

const initialPage: IPageable = {
  pageNumber: 0,
  pageSize: 25,
};

const ProductTable: React.FC = () => {
  const [_cachedData, setCachedData] = useState<IProduct[][]>();
  const [_productData, setProductData] = useState<IProduct[]>();
  const [_isPageLoading, setPageLoading] = useState<boolean>(false);
  const [_isLoading, setLoading] = useState<boolean>(true);
  const [_pageData, setPageData] = useState<IPageable>(initialPage);
  const [_totalElements, setTotalElements] = useState<number>(0);

  useEffect(() => {
    const { pageNumber, pageSize } = _pageData;

    if (_cachedData && _cachedData[pageNumber] !== undefined) {
      setProductData(_cachedData[pageNumber]);
    } else {
      setPageLoading(true);
      ProductService.getProducts(pageNumber, pageSize)
        .then(({ data }) => {
          const {
            page: { content, totalElements },
          } = data;
          setTotalElements(totalElements);
          const cachedData =
            _cachedData || Array(totalElements).fill(undefined);
          cachedData[pageNumber] = content;
          setCachedData(cachedData);
          setProductData(content);
        })
        .catch(() => {})
        .finally(() => {
          setPageLoading(false);
          setLoading(false);
        });
    }
  }, [_cachedData, _pageData]);

  const renderTableRow = (product: IProduct, index: number) => {
    const { productLineItem } = product;
    const {
      id,
      upc,
      itemNumber,
      name,
      unitOfMeasurement: { description },
      brand,
    } = productLineItem;
    return (
      <TableRow data-testid={`product-table-row-${index}`} key={id}>
        <TableCell>{upc}</TableCell>
        <TableCell>{itemNumber}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{brand}</TableCell>
      </TableRow>
    );
  };

  const handlePageChange = (pageNumber: number, pageSize: number): void => {
    // Return to first page and clear cache if the pageSize changes
    if (_pageData.pageSize !== pageSize) {
      setPageData({ pageNumber: 0, pageSize });
      setCachedData([]);
    } else {
      setPageData({ ..._pageData, pageNumber });
    }
  };

  return (
    <TableContainer data-testid="product-table-container">
      <Title dataTestId="product-table-title" color="primary">
        {ProductConstants.PRODUCT_TABLE_TITLE}
      </Title>
      {_isLoading ? (
        <Progress data-testid="product-table-loading" color="secondary" />
      ) : (
        <>
          <Table data-testid="product-table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_UPC}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_ITEM_NUMBER}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_UNIT_MEASUREMENT}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_NAME}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_BRAND}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_productData?.map((product, i) => renderTableRow(product, i))}
            </TableBody>
          </Table>
          {_isPageLoading && (
            <CircularProgress
              data-testid="product-table-page-loading"
              size={100}
              color="secondary"
            />
          )}
          {_pageData && (
            <TablePagination
              disabled={_isPageLoading}
              rowsPerPage={_pageData.pageSize}
              selectedPage={_pageData.pageNumber}
              totalRowCount={_totalElements}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </TableContainer>
  );
};

export default ProductTable;
