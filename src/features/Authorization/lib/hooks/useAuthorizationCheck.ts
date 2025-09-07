import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const useAuthorizationCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (!user) {
      navigate('/login');
    }
  }, []);
};
