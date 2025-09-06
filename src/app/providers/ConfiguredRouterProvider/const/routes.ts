import type { RouteObject } from 'react-router';

import { AuthorizationPage } from 'pages/AuthorizationPage';
import { MainPage } from 'pages/MainPage';

import { MainLayout } from '../ui/MainLayout/MainLayout';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: MainPage,
      },
      {
        path: 'login',
        Component: AuthorizationPage,
      },
    ],
  },
];
