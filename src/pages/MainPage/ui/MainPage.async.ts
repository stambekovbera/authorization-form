import { lazy } from 'react';

export const MainPageAsync = lazy(() =>
  import('./MainPage').then((res) => ({ default: res.MainPage })),
);
