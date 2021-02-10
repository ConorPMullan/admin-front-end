import React, { useEffect, useState } from 'react';
import { Product as ProductConstants } from '@constants';
import { IResponsePage, IProduct } from '@interfaces';
import { ProductService } from '@services';
import TablePagination from '../table-pagination';
import Title from '../../title';
import {
  MuiProgress as Progress,
  MuiTable as Table,
  MuiTableBody as TableBody,
  MuiTableCell as TableCell,
  MuiTableHead as TableHead,
  MuiTableRow as TableRow,
  TableContainer,
} from './styled';

const ProductTable: React.FC = () => {
  const [_pageData, setPageData] = useState<IResponsePage<IProduct>>();
  const [_isPageLoading, setPageLoading] = useState<boolean>(false);
  const [_isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts(0);
  }, []);

  const getProducts = (selectedPage: number, rowsPerPage = 25): void => {
    setPageLoading(true);
    ProductService.getProducts(selectedPage, rowsPerPage)
      .then(({ data }) => {
        const { page } = data;
        setPageData(page);
      })
      .finally(() => {
        setPageLoading(false);
        setLoading(false);
      });
  };

  const renderTableRow = (product: IProduct, index: number) => {
    const { productLineItem } = product;
    const {
      id,
      upc,
      itemNumber,
      name,
      unitOfMeasurement: { description },
    } = productLineItem;
    return (
      <TableRow data-testid={`product-table-row-${index}`} key={id}>
        <TableCell>{upc}</TableCell>
        <TableCell>{itemNumber}</TableCell>
        <TableCell>{description}</TableCell>
        <TableCell>{name}</TableCell>
      </TableRow>
    );
  };

  const handlePageChange = (newPage: number, rowsPerPage: number): void => {
    getProducts(newPage, rowsPerPage);
  };

  return (
    <TableContainer data-testid="product-table-container">
      <Title dataTestId="product-table-title" color="primary">
        {ProductConstants.PROCUCT_TABLE_TITLE}
      </Title>
      {_isLoading ? (
        <Progress data-testid="product-table-loading" />
      ) : (
        <>
          <Table data-testid="product-table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  {ProductConstants.PROCUCT_TABLE_COLUMN_UPC}
                </TableCell>
                <TableCell>
                  {ProductConstants.PROCUCT_TABLE_COLUMN_ITEM_NUMBER}
                </TableCell>
                <TableCell>
                  {ProductConstants.PROCUCT_TABLE_COLUMN_UNIT_MEASUREMENT}
                </TableCell>
                <TableCell>
                  {ProductConstants.PROCUCT_TABLE_COLUMN_NAME}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_pageData?.content.map((product, i) =>
                renderTableRow(product, i)
              )}
            </TableBody>
          </Table>
          {_pageData && (
            <TablePagination
              disabled={_isPageLoading}
              rowsPerPage={_pageData.pageable.pageSize}
              selectedPage={_pageData.pageable.pageNumber}
              totalRowCount={_pageData.totalElements}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </TableContainer>
  );
};

export default ProductTable;
