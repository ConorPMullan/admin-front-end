import React, { ReactElement } from 'react';
import { Product } from '@constants';
import { ProductTable, Title, ProductFilter } from '@components';
import { Product as Context } from '@contexts';
import { MuiPaper as Paper, MuiGrid as Grid } from './styled';

const ProductDetails: React.FC = (): ReactElement => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title dataTestId="manage-products-title" variant="h5">
          {Product.MANAGE_PRODUCTS_TITLE}
        </Title>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Context.ProductProvider>
            <ProductFilter />
            <ProductTable />
          </Context.ProductProvider>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
