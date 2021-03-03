import { Groups } from '@constants';
import { ApiUrls, Instance } from '@integration';
import {
  IResponseBase,
  IProduct,
  IProductFilter,
  IProductLineGroupData,
} from '@interfaces';
import { AxiosResponse } from 'axios';

const getProducts = (
  page: number,
  size: number,
  productFilter?: IProductFilter
): Promise<AxiosResponse<IResponseBase<IProduct>>> => {
  const params = { page, size, ...productFilter };
  return Instance.get<IResponseBase<IProduct>>(ApiUrls.PRODUCTS, { params });
};

const getProductLineGroupOptions = (): Promise<
  AxiosResponse<IProductLineGroupData>
> => {
  const params = {
    groupIdList: `${Groups.BRAND_GROUP.productLineGroupId},${Groups.VENDOR_GROUP.productLineGroupId}`,
  };
  return Instance.get<IProductLineGroupData>(
    ApiUrls.GROUPS_PRODUCT_LINE_OPTIONS,
    { params }
  );
};

const ProductService = {
  getProducts,
  getProductLineGroupOptions,
};

export default ProductService;
