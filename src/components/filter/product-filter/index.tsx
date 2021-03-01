import React, { useEffect, useState } from 'react';
import * as z from 'zod';
import { Input, Product, Validation as ValidationConstants } from '@constants';
import { IProductFilter } from '@interfaces';
import TextSearch from '../../input/text-search';
import Title from '../../data-display/title';
import {
  ProductFilterContainer,
  ProductFilterComponentWrapper,
  MuiFilterListIcon as FilterListIcon,
  MuiGrid as Grid,
  MuiButton as Button,
  MuiIconButton as IconButton,
  MuiFade as Fade,
} from './styled';

interface ProductFilterProps {
  isProductDataLoading?: boolean;
  productFilter?: IProductFilter;
  onChangeProductFilter(productFilter: IProductFilter): void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  isProductDataLoading,
  productFilter,
  onChangeProductFilter,
}) => {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const [isFilterVisible, setFilterVisible] = useState<boolean>(false);
  const [isFilterValid, setFilterValidity] = useState<boolean>(false);

  const buildFormValidation = () => {
    return z.object({
      [ValidationConstants.PRODUCT_LIST_SEARCH.FIELD]:
        ValidationConstants.PRODUCT_LIST_SEARCH.VALIDATION,
    });
  };

  useEffect(() => {
    const formParse = buildFormValidation();
    try {
      formParse.parse({
        [ValidationConstants.PRODUCT_LIST_SEARCH.FIELD]: searchValue,
      });
      setFilterValidity(true);
    } catch (err) {
      setFilterValidity(false);
    }
  }, [searchValue]);

  const handleShowFilterClick = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFilterUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setFilterVisible(false);
    const updatedProductFilter: IProductFilter = { search: searchValue };
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
                    initialValue={productFilter?.search}
                  />
                </Grid>
                <Grid item sm={6} md={3} />
                <Grid item sm={6} md={3} />
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
      <IconButton
        data-testid="product-filter-toggle-button"
        disabled={isProductDataLoading}
        aria-label="show-filter"
        onClick={handleShowFilterClick}
      >
        <FilterListIcon />
      </IconButton>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
