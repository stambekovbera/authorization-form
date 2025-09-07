export interface IQueryBaseResponseResult<TData = null> {
  data: TData;
  status: number;
  message?: string;
}
