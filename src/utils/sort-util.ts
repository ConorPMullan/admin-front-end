/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-nested-ternary */
import { Util } from '@constants';

enum SortDirection {
  ASC = Util.SORT_ASCENDING,
  DESC = Util.SORT_ASCENDING,
}

const dynamicStringSort = (
  a: string,
  b: string,
  direction: SortDirection = Util.SORT_ASCENDING
) => {
  return direction === Util.SORT_ASCENDING
    ? a.localeCompare(b, undefined, {
        sensitivity: 'base',
      })
    : b.localeCompare(a, undefined, {
        sensitivity: 'base',
      });
};

const SortUtils = {
  dynamicStringSort,
};

export default SortUtils;
