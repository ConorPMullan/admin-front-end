import React from 'react';
import { ProductDetailsForm } from '@components';
import { IProductLineItem } from '@interfaces';

interface ProductDetailsProps {
  product?: IProductLineItem;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
}): React.ReactElement => {
  return <ProductDetailsForm product={product} />;
};

export default ProductDetails;
