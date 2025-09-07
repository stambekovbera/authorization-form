import { api } from 'shared/api';

import type {
  ILoginMutationProps,
  TLoginMutationResult,
} from '../types/authorizationApi';

const authorizationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginMutationResult, ILoginMutationProps>({
      query: (data) => ({
        url: '/api/auth',
        method: 'POST',
        body: data,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authorizationApi;
