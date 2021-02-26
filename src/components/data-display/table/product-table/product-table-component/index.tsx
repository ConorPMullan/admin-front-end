import React from 'react';
import { Product as ProductConstants } from '@constants';
import { IProduct } from '@interfaces';
import TablePagination from '../../table-pagination';
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

interface ProductTableProps {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  productData: IProduct[];
  isTableLoading?: boolean;
  isPageLoading?: boolean;
  onChangePage(pageNumber: number, pageSize: number): void;
}

const ProductTableComponent: React.FC<ProductTableProps> = ({
  isPageLoading,
  isTableLoading,
  pageNumber,
  pageSize,
  productData,
  totalElements,
  onChangePage,
}) => {
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
        <TableCell>{itemNumber}</TableCell>
        <TableCell>{upc}</TableCell>
        <TableCell>{brand}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell align="right">{description}</TableCell>
      </TableRow>
    );
  };

  return (
    <TableContainer data-testid="product-table-container">
      {isTableLoading ? (
        <Progress data-testid="product-table-loading" color="secondary" />
      ) : (
        <>
          <Table data-testid="product-table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_ITEM_NUMBER}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_UPC}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_BRAND}
                </TableCell>
                <TableCell>
                  {ProductConstants.PRODUCT_TABLE_COLUMN_NAME}
                </TableCell>
                <TableCell align="right">
                  {ProductConstants.PRODUCT_TABLE_COLUMN_UNIT_MEASUREMENT}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productData.map((product, i) => renderTableRow(product, i))}
            </TableBody>
          </Table>
          {isPageLoading && (
            <CircularProgress
              data-testid="product-table-page-loading"
              size={100}
              color="secondary"
            />
          )}
          <TablePagination
            disabled={isPageLoading}
            rowsPerPage={pageSize}
            selectedPage={pageNumber}
            totalRowCount={totalElements}
            onPageChange={onChangePage}
          />
        </>
      )}
    </TableContainer>
  );
};

export default ProductTableComponent;
