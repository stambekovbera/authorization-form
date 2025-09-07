import { api } from 'shared/api';

import type {
  ILoginMutationProps,
  TLoginMutationResult,
} from '../types/authorizationApi';

const authorizationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<TLoginMutationResult, ILoginMutationProps>({
      query: (props) => ({
        url: '/api/auth',
        method: 'POST',
        body: props.body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, endpoints: authorizationApiEndpoints } =
  authorizationApi;
