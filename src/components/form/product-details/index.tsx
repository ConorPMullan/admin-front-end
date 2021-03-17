import React from 'react';
import { Product as ProductConstants } from '@constants';
import TabPanel from '../../data-display/tab-panel';
import {
  ProductDetailsFormContainer,
  MuiGrid as Grid,
  MuiTabs as Tabs,
  MuiTextField as TextField,
  MuiTab as Tab,
} from './styled';

const ProductDetailsForm: React.FC = () => {
  const [selectedTab, setTab] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  return (
    <ProductDetailsFormContainer>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        orientation="vertical"
        value={selectedTab}
        onChange={handleChange}
        aria-label="Product Details Tabs"
      >
        <Tab
          data-testid="product-form-details-tab"
          label={ProductConstants.PRODUCT_FORM_DETAILS}
        />
        <Tab
          data-testid="product-form-long-description-tab"
          label={ProductConstants.PRODUCT_FORM_LONG_DESCRIPTION}
        />
        <Tab
          data-testid="product-form-ingredients-tab"
          label={ProductConstants.PRODUCT_FORM_INGREDIENTS}
        />
        <Tab
          data-testid="product-form-guaranteed-analysis-tab"
          label={ProductConstants.PRODUCT_FORM_GUARANTEED_ANALYSIS}
        />
      </Tabs>
      <TabPanel value={selectedTab} index={0} />
      <TabPanel value={selectedTab} index={1}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} lg={9}>
            <TextField
              inputProps={{
                'data-testid': 'product-form-long-description',
              }}
              label={ProductConstants.PRODUCT_FORM_LONG_DESCRIPTION}
              multiline
              rows={20}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} lg={9}>
            <TextField
              inputProps={{
                'data-testid': 'product-form-ingredients',
              }}
              label={ProductConstants.PRODUCT_FORM_INGREDIENTS}
              multiline
              rows={20}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} lg={9}>
            <TextField
              inputProps={{
                'data-testid': 'product-form-guaranteed-analysis',
              }}
              label={ProductConstants.PRODUCT_FORM_GUARANTEED_ANALYSIS}
              multiline
              rows={20}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </TabPanel>
    </ProductDetailsFormContainer>
  );
};

export default ProductDetailsForm;
