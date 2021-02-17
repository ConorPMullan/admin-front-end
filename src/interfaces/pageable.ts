export default interface IPageable {
  offset?: number;
  paged?: boolean;
  pageNumber: number;
  pageSize: number;
  totalElements?: number;
}
