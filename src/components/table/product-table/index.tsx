import React, { useEffect, useState } from 'react';
import { ProductService } from '@services';
import { Product as ProductConstants } from '@constants';
import { IProduct } from '@interfaces';
import {
  MuiProgress as Progress,
  MuiTable as Table,
  MuiTableBody as TableBody,
  MuiTableCell as TableCell,
  MuiTableHead as TableHead,
  MuiTableRow as TableRow,
  MuiTypography as Typography,
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
        setProducts(response.data.content);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Typography data-testid="product-table-title">
        {ProductConstants.PROCUCT_TABLE_TITLE}
      </Typography>
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
              <TableCell align="right">
                {ProductConstants.PROCUCT_TABLE_COLUMN_NAME}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, i) => {
              const { productLineItem } = product;
              const {
                id,
                upc,
                itemNumber,
                name,
                unitOfMeasurement: { description },
              } = productLineItem;
              return (
                <TableRow data-testid={`product-table-row-${i}`} key={id}>
                  <TableCell>{upc}</TableCell>
                  <TableCell>{itemNumber}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell align="right">{name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default ProductTable;
