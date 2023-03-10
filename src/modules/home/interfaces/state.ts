export interface ISLICE_INIT {
  loading: boolean;
  count: number;
  next: string | null;
  previous: null | string;
  list: Array<any>;
  type: Array<any>;
  error: null;
}
