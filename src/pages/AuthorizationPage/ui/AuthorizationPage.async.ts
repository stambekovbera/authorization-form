import { lazy } from 'react';

export const AuthorizationPageAsync = lazy(() =>
  import('./AuthorizationPage').then((res) => ({
    default: res.AuthorizationPage,
  })),
);
