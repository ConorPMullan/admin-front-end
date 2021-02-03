import React, { ReactElement } from 'react';
import { Product } from '@constants';
import { ProductTable, Title } from '@components';
import { MuiPaper as Paper, MuiGrid as Grid } from './styled';

const ProductDetails: React.FC = (): ReactElement => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title dataTestId="manage-products-title" variant="h5">
          {Product.MANAGE_PROCUCTS_TITLE}
        </Title>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ProductTable />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
