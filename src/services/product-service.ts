import { ApiUrls, Instance } from '@integration';
import { IResponseBase, IProduct } from '@interfaces';
import { AxiosResponse } from 'axios';

// type NewType = IResponseBase<IProduct>;
const getProducts = (): Promise<AxiosResponse<IResponseBase<IProduct>>> => {
  return Instance.get<IResponseBase<IProduct>>(ApiUrls.PRODUCTS);
};

const ProductService = {
  getProducts,
};

export default ProductService;
