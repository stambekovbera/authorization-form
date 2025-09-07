import {
  type BaseQueryFn,
  createApi,
  type FetchArgs,
  fetchBaseQuery,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { parseApiErrors } from 'shared/lib';

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({
    baseUrl: '/',
  })(args, api, extraOptions);

  if (result.error) {
    parseApiErrors(result.error);
  }

  return result;
};

export const api = createApi({
  baseQuery: customBaseQuery,
  reducerPath: 'api',
  endpoints: () => ({}),
});
