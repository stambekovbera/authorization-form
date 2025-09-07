import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useLoginMutation } from '../../api/authorizationApi';
import { authorizationFormSchema } from '../../schemas/authorizationFormSchema';
import type { TAuthorizationForm } from '../../types/authorizationForm';

const initialValues: TAuthorizationForm = {
  email: '',
  password: '',
};

export const useAuthorizationForm = () => {
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
    await login({ body: values }).unwrap();
  };

  const handleSubmit = async () => {
    await onSubmit(handleAuth)();
  };

  return { form, onSubmit: handleSubmit };
};
