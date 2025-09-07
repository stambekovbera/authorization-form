import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { authorizationFormSchema } from '../../schemas/authorizationFormSchema';
import type { TAuthorizationForm } from '../../types/authorizationForm';

const initialValues: TAuthorizationForm = {
  email: '',
  password: '',
};

export const useAuthorizationForm = () => {
  const form = useForm<TAuthorizationForm>({
    defaultValues: initialValues,
    resolver: zodResolver(authorizationFormSchema),
  });

  const { handleSubmit: onSubmit } = form;

  const handleAuth: SubmitHandler<TAuthorizationForm> = async (values) => {
    console.log('values: ', values);
  };

  const handleSubmit = async () => {
    await onSubmit(handleAuth)();
  };

  return { form, onSubmit: handleSubmit };
};
