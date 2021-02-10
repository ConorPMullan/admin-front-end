import { ApiUrls, Instance } from '@integration';
import { IResponseBase, IProduct } from '@interfaces';
import { AxiosResponse } from 'axios';

const getProducts = (
  page: number,
  size: number
): Promise<AxiosResponse<IResponseBase<IProduct>>> => {
  const params = { page, size };
  return Instance.get<IResponseBase<IProduct>>(ApiUrls.PRODUCTS, { params });
};

const ProductService = {
  getProducts,
};

export default ProductService;
