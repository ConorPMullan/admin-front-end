import React, { useEffect, useState } from 'react';
import * as z from 'zod';
import {
  Groups,
  Input,
  Product,
  Validation as ValidationConstants,
} from '@constants';
import {
  IProductFilter,
  IProductLineGroupOption,
  ISelectOption,
} from '@interfaces';
import { ProductService } from '@services';
import SelectAutocomplete from '../../input/select-autocomplete';
import TextSearch from '../../input/text-search';
import Title from '../../data-display/title';
import {
  ProductFilterContainer,
  ProductFilterComponentWrapper,
  ProductFilterApplyButtonWrapper,
  MuiFilterListIcon as FilterListIcon,
  MuiGrid as Grid,
  MuiButton as Button,
  MuiIconButton as IconButton,
  MuiFade as Fade,
} from './styled';

interface ProductFilterProps {
  isProductDataLoading?: boolean;
  onChangeProductFilter(productFilter: IProductFilter): void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  isProductDataLoading,
  onChangeProductFilter,
}) => {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false);
  const [isFilterValid, setFilterValidity] = useState<boolean>(false);
  const [vendorOptions, setVendorOptions] = useState<ISelectOption[]>([]);
  const [selectedVendor, setSelectedVendor] = useState<ISelectOption | null>(
    null
  );
  const [brandOptions, setBrandOptions] = useState<ISelectOption[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<ISelectOption | null>(
    null
  );

  const buildFormValidation = () => {
    return z.object({
      [ValidationConstants.PRODUCT_LIST_SEARCH.FIELD]:
        ValidationConstants.PRODUCT_LIST_SEARCH.VALIDATION,
      [ValidationConstants.PRODUCT_LIST_FILTER_BRANDS.FIELD]:
        ValidationConstants.PRODUCT_LIST_FILTER_BRANDS.VALIDATION,
      [ValidationConstants.PRODUCT_LIST_FILTER_VENDORS.FIELD]:
        ValidationConstants.PRODUCT_LIST_FILTER_VENDORS.VALIDATION,
    });
  };

  useEffect(() => {
    const fetchData = () => {
      ProductService.getProductLineGroupOptions()
        .then(({ data }) => {
          const vendorGroupData = data?.productLineGroups.find(
            (item) =>
              item.productLineGroupId === Groups.VENDOR_GROUP.productLineGroupId
          );
          if (vendorGroupData?.productLineGroupOptions) {
            const mappedVendorOptions = mapGroupOptionsToSelectOptions(
              vendorGroupData.productLineGroupOptions
            );
            setVendorOptions(mappedVendorOptions);
          }

          const brandGroupData = data?.productLineGroups.find(
            (item) =>
              item.productLineGroupId === Groups.BRAND_GROUP.productLineGroupId
          );
          if (brandGroupData?.productLineGroupOptions) {
            const mappedBrandOptions = mapGroupOptionsToSelectOptions(
              brandGroupData.productLineGroupOptions
            );
            setBrandOptions(mappedBrandOptions);
          }
        })
        .catch(() => {});
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const formParse = buildFormValidation();
    try {
      formParse.parse({
        [ValidationConstants.PRODUCT_LIST_SEARCH.FIELD]: searchValue,
        [ValidationConstants.PRODUCT_LIST_FILTER_BRANDS.FIELD]: selectedBrand,
        [ValidationConstants.PRODUCT_LIST_FILTER_VENDORS.FIELD]: selectedVendor,
      });
      setFilterValidity(true);
    } catch (err) {
      setFilterValidity(false);
    }
  }, [searchValue, selectedBrand, selectedVendor]);

  const mapGroupOptionsToSelectOptions = (
    groupOptions: IProductLineGroupOption[]
  ): ISelectOption[] => {
    return groupOptions.map<ISelectOption>((option) =>
      mapGroupOptionToSelectOption(option)
    );
  };

  const mapGroupOptionToSelectOption = (
    groupOption: IProductLineGroupOption
  ): ISelectOption => {
    return {
      label: groupOption.productLineGroupOptionName,
      value: groupOption.productLineGroupOptionId.toString(),
    };
  };

  const handleShowFilterClick = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFilterUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setFilterVisible(false);
    const selectedGroups: string[] = [];
    if (selectedVendor) {
      selectedGroups.push(selectedVendor?.value);
    }
    if (selectedBrand) {
      selectedGroups.push(selectedBrand?.value);
    }
    const productLineGroupOptions =
      selectedGroups.length > 0 ? selectedGroups.join(',') : undefined;

    const updatedProductFilter: IProductFilter = {
      search: searchValue,
      productLineGroupOptions,
    };
    onChangeProductFilter(updatedProductFilter);
  };

  return (
    <ProductFilterContainer data-testid="product-filter-container">
      <ProductFilterComponentWrapper>
        {isFilterVisible ? (
          <Fade in>
            <form>
              <Grid container spacing={2} alignItems="center">
                <Grid item sm={12} md={5}>
                  <TextSearch
                    onChangeValue={setSearchValue}
                    initialValue={searchValue}
                  />
                </Grid>
                <Grid item sm={6} md={3}>
                  <SelectAutocomplete
                    id="select-autocomplete-vendor"
                    initialValue={selectedVendor}
                    label={Product.PRODUCT_VENDOR_SELECTION}
                    options={vendorOptions}
                    onChangeValue={setSelectedVendor}
                  />
                </Grid>
                <Grid item sm={6} md={3}>
                  <SelectAutocomplete
                    id="select-autocomplete-brand"
                    initialValue={selectedBrand}
                    label={Product.PRODUCT_BRAND_SELECTION}
                    options={brandOptions}
                    onChangeValue={setSelectedBrand}
                  />
                </Grid>
                <Grid item sm={3} md={1}>
                  <Button
                    data-testid="product-filter-apply-button"
                    type="submit"
                    color="secondary"
                    size="small"
                    disabled={isProductDataLoading || !isFilterValid}
                    onClick={handleFilterUpdate}
                    fullWidth
                  >
                    {Input.APPLY_BUTTON}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Fade>
        ) : (
          <Title dataTestId="product-table-title" color="primary">
            {Product.PRODUCT_TABLE_TITLE}
          </Title>
        )}
      </ProductFilterComponentWrapper>
      <ProductFilterApplyButtonWrapper>
        <IconButton
          data-testid="product-filter-toggle-button"
          disabled={isProductDataLoading}
          aria-label="show-filter"
          onClick={handleShowFilterClick}
        >
          <FilterListIcon />
        </IconButton>
      </ProductFilterApplyButtonWrapper>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
