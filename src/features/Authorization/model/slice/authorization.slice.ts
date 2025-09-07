import {
  createSlice,
  type PayloadAction,
  type WithSlice,
} from '@reduxjs/toolkit';

import type { IUser } from 'entities/User';
import { authorizationApiEndpoints } from 'features/Authorization/api/authorizationApi';
import { rootReducer } from 'shared/config';

import type { IAuthorizationSchema } from '../types/authorizationSlice';

const initialState: IAuthorizationSchema = {
  user: null,
};

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
  selectors: {
    getUser: (state) => state.user,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authorizationApiEndpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data;
      },
    );
  },
});

declare module 'shared/config/store/rootReducer' {
  // Утилита WithSlice предполагает, что редьюсер находится под slice.reducerPath
  export interface ILazyLoadedSlices
    extends WithSlice<typeof authorizationSlice> {}
}

const injectedAuthSlice = authorizationSlice.injectInto(rootReducer);

export const {
  reducer: authorizationReducer,
  actions: authorizationActions,
  selectors: authorizationSelectors,
} = injectedAuthSlice;
