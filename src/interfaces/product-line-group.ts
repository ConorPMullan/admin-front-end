import IProductlineGroupOption from './product-line-group-option';

export default interface IProductLineGroup {
  parameter: string;
  productLineGroupId: number;
  productLineGroupName: string;
  productLineGroupOptions?: IProductlineGroupOption[];
}
