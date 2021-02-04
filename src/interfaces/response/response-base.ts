import IResponsePage from './response-page';

export default interface IResponseBase<T> {
  page: IResponsePage<T>;
}
