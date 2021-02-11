import IPageable from '../pageable';

export default interface IResponsePage<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageable;
  size: number;
  totalElements: number;
  totalPages: number;
}
