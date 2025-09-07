import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { USER_LOCAL_STORAGE_KEY } from 'shared/const';

import { useLoginMutation } from '../../api/authorizationApi';
import { authorizationFormSchema } from '../../schemas/authorizationFormSchema';
import type { TAuthorizationForm } from '../../types/authorizationForm';

const initialValues: TAuthorizationForm = {
  email: '',
  password: '',
};

export const useAuthorizationForm = () => {
  const navigate = useNavigate();

  const [
    login,
    { isLoading },
  ] = useLoginMutation();

  const form = useForm<TAuthorizationForm>({
    defaultValues: initialValues,
    resolver: zodResolver(authorizationFormSchema),
    disabled: isLoading,
  });

  const { handleSubmit: onSubmit } = form;

  const handleAuth: SubmitHandler<TAuthorizationForm> = async (values) => {
    const response = await login({ body: values }).unwrap();

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));

    navigate('/');
  };

  const handleSubmit = async () => {
    await onSubmit(handleAuth)();
  };

  return { form, onSubmit: handleSubmit, isSubmitting: isLoading };
};
