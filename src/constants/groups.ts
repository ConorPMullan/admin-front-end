import { IProductLineGroup } from '@interfaces';

interface IGroups {
  BRAND_GROUP: IProductLineGroup;
  VENDOR_GROUP: IProductLineGroup;
}

const VALIDATION_FIELDS: IGroups = {
  BRAND_GROUP: {
    parameter: 'brands',
    productLineGroupId: 2,
    productLineGroupName: 'brands',
  },
  VENDOR_GROUP: {
    parameter: 'vendors',
    productLineGroupId: 7,
    productLineGroupName: 'vendors',
  },
};

export default VALIDATION_FIELDS;
