import React, { useEffect, useState } from 'react';
import { Product as ProductConstants } from '@constants';
import { IProduct } from '@interfaces';
import { ProductService } from '@services';
import Title from '../../title';
import {
  MuiProgress as Progress,
  MuiTable as Table,
  MuiTableBody as TableBody,
  MuiTableCell as TableCell,
  MuiTableHead as TableHead,
  MuiTableRow as TableRow,
} from './styled';

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = (): void => {
    setLoading(true);
    ProductService.getProducts()
      .then((response) => {
        setProducts(response.data.page.content);
        setLoading(false);
      })
      .catch(() => {
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

  return (
    <>
      <Title dataTestId="product-table-title" color="primary">
        {ProductConstants.PROCUCT_TABLE_TITLE}
      </Title>
      {isLoading ? (
        <Progress data-testid="product-table-loading" />
      ) : (
        <Table data-testid="product-table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>{ProductConstants.PROCUCT_TABLE_COLUMN_UPC}</TableCell>
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
            {products.map((product, i) => renderTableRow(product, i))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default ProductTable;
