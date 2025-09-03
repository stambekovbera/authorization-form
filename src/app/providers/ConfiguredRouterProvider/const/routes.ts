import type { RouteObject } from 'react-router';

import { AuthorizationPage } from 'pages/AuthorizationPage';

export const routes: RouteObject[] = [
  {
    path: '/login',
    Component: AuthorizationPage,
  },
];
