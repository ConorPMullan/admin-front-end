import React, { ReactElement } from 'react';
import { Product } from '@constants';
import { ProductTable } from '@components';
import {
  MuiPaper as Paper,
  MuiGrid as Grid,
  MuiTypography as Typography,
} from './styled';

const ProductDetails: React.FC = (): ReactElement => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          data-testid="manage-products-title"
          variant="h5"
          gutterBottom
        >
          {Product.MANAGE_PROCUCTS_TITLE}
        </Typography>
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
