import React, { ReactElement, useEffect } from 'react';
import { Product } from '@constants';
import { ProductTable, Title, ProductFilter } from '@components';
import { IProductFilter } from '@interfaces';
import { MuiPaper as Paper, MuiGrid as Grid } from './styled';

const ProductDetails: React.FC = (): ReactElement => {
  const [productFilter, setProductFilter] = React.useState<IProductFilter>({});
  const [isProductDataLoading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
  }, [productFilter]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Title dataTestId="manage-products-title" variant="h5">
          {Product.MANAGE_PRODUCTS_TITLE}
        </Title>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <ProductFilter
            isProductDataLoading={isProductDataLoading}
            productFilter={productFilter}
            onChangeProductFilter={setProductFilter}
          />
          <ProductTable
            isProductDataLoading={isProductDataLoading}
            productFilter={productFilter}
            setProductLoading={setLoading}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
