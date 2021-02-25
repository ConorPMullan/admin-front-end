import { ApiUrls, Instance } from '@integration';
import { IResponseBase, IProduct, IProductFilter } from '@interfaces';
import { AxiosResponse } from 'axios';

const getProducts = (
  page: number,
  size: number,
  productFilter?: IProductFilter
): Promise<AxiosResponse<IResponseBase<IProduct>>> => {
  const params = { page, size, ...productFilter };
  return Instance.get<IResponseBase<IProduct>>(ApiUrls.PRODUCTS, { params });
};

const ProductService = {
  getProducts,
};

export default ProductService;
