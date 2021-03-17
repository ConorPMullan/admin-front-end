import React from 'react';
import { Product as ProductConstants } from '@constants';
import { IProductLineItem } from '@interfaces';
import TabPanel from '../../data-display/tab-panel';
import SelectDropdown from '../../input/select-dropdown';
import {
  ProductDetailsFormContainer,
  DividerWrapper,
  MuiDivider as Divider,
  MuiGrid as Grid,
  MuiTabs as Tabs,
  MuiTextField as TextField,
  MuiTypography as Typography,
  FieldLabel,
  FieldValue,
  MuiTab as Tab,
} from './styled';

interface ProductDetailsProps {
  product?: IProductLineItem;
}

const ProductDetailsForm: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedTab, setTab] = React.useState(0);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  const getReadOnlyField = (id: string, title: string, value?: string) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3}>
          <FieldLabel>{title}</FieldLabel>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <FieldValue data-testid={id}>{value}</FieldValue>
        </Grid>
      </>
    );
  };

  const getEditableTextField = (id: string, title: string, value?: string) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3}>
          <FieldLabel>{title}</FieldLabel>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <TextField
            inputProps={{
              'data-testid': id,
            }}
            label={title}
            variant="outlined"
            value={value}
          />
        </Grid>
      </>
    );
  };

  const getEditableSelection = (id: string, title: string) => {
    return (
      <>
        <Grid item xs={12} sm={4} md={3}>
          <FieldLabel>{title}</FieldLabel>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <SelectDropdown
            id={id}
            label={title}
            options={[]}
            onChange={() => {}}
          />
        </Grid>
      </>
    );
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
      <TabPanel value={selectedTab} index={0}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Infor</Typography>
          </Grid>
          {getReadOnlyField(
            'product-form-item-number',
            'Item Number',
            product?.itemNumber
          )}
          {getReadOnlyField('product-form-name', 'Name', product?.name)}
          {getReadOnlyField('product-form-upc', 'Default UPC', product?.upc)}
          {getReadOnlyField(
            'product-form-um',
            'UM',
            product?.unitOfMeasurement.description
          )}
          {getReadOnlyField('product-form-brand', 'Brand', product?.brand)}
          {getReadOnlyField('product-form-size', 'Product Size')}
          {getReadOnlyField('product-form-count', 'Count')}
          {getReadOnlyField(
            'product-form-edlp',
            ProductConstants.PRODUCT_FORM_EDLP,
            `$${product?.price || 0}`
          )}
          <DividerWrapper xs={12}>
            <Divider variant="middle" />
          </DividerWrapper>
          <Grid item xs={12}>
            <Typography variant="h6">Platform</Typography>
          </Grid>
          {getEditableTextField(
            'product-form-description',
            ProductConstants.PRODUCT_FORM_DESCRIPTION
          )}
          {getEditableTextField(
            'product-form-image-name',
            ProductConstants.PRODUCT_FORM_IMAGE_NAME
          )}
          {getEditableSelection(
            'product-form-flavor',
            ProductConstants.PRODUCT_FORM_FLAVOR
          )}
        </Grid>
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Grid container>
          <Grid item xs={12}>
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
        <Grid container>
          <Grid item xs={12}>
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
        <Grid container>
          <Grid item xs={12}>
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
