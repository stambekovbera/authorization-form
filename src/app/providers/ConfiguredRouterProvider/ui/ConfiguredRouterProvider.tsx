import { RouterProvider } from 'react-router';

import { router } from '../config/router';

export const ConfiguredRouterProvider = () => {
  return <RouterProvider router={router} />;
};
