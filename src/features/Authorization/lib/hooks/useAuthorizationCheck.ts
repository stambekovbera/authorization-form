import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import { useAppDispatch } from 'app/providers';
import type { IUser } from 'entities/User';
import { authorizationActions } from 'features/Authorization';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const';

export const useAuthorizationCheck = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = localStorage.getItem('user');

    const parsedUser = user ? (JSON.parse(user) as IUser) : null;

    if (parsedUser && parsedUser.email) {
      dispatch(authorizationActions.setUser(parsedUser));
    }

    if (!parsedUser && location.pathname !== '/login') {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
      navigate('/login', { replace: true, state: { from: location.pathname } });
    }
  }, [
    navigate,
    location,
    dispatch,
  ]);

  useEffect(() => {
    const user = localStorage.getItem('user');

    const parsedUser = user ? (JSON.parse(user) as IUser) : null;

    if (parsedUser && parsedUser.email && location.pathname === '/login') {
      dispatch(authorizationActions.setUser(parsedUser));
      navigate(location?.state?.from || '/');
    }
  }, [
    dispatch,
    location,
    navigate,
  ]);
};
