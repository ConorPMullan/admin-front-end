import IProductUnitMeasurement from './product-um';

export default interface IProductLineItem {
  id: number;
  itemNumber: string;
  upc: string;
  name: string;
  unitOfMeasurement: IProductUnitMeasurement;
  price: number;
  imageUrl: string;
}
