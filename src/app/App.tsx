import './styles/index.scss';

import { createPortal } from 'react-dom';
import { Bounce, ToastContainer } from 'react-toastify';

import { ConfiguredRouterProvider, StoreProvider } from './providers';

export const App = () => {
  return (
    <StoreProvider>
      <ConfiguredRouterProvider />

      {createPortal(
        <ToastContainer
          autoClose={3000}
          position="top-right"
          pauseOnHover
          newestOnTop
          closeOnClick
          transition={Bounce}
        />,
        document.body,
      )}
    </StoreProvider>
  );
};
