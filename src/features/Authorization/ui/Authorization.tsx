import cn from 'classnames';
import { memo } from 'react';
import { FormProvider } from 'react-hook-form';

import { BlockWithTitle } from 'entities/BlockWithTitle';
import { Button } from 'shared/ui';

import { useAuthorizationForm } from '../lib/hooks/useAuthorizationForm';

import styles from './Authorization.module.scss';
import { AuthorizationForm } from './AuthorizationForm/AuthorizationForm';

interface IAuthorizationProps {
  className?: string;
}

const AuthorizationComponent = (props: IAuthorizationProps) => {
  const { className = '' } = props;

  const { form, onSubmit, isSubmitting } = useAuthorizationForm();

  return (
    <BlockWithTitle
      title="Авторизация"
      className={cn(className)}
    >
      <div className={styles.content}>
        <FormProvider {...form}>
          <AuthorizationForm />
        </FormProvider>

        <Button
          onClick={onSubmit}
          loading={isSubmitting}
        >
          Войти
        </Button>
      </div>
    </BlockWithTitle>
  );
};

export const Authorization = memo(AuthorizationComponent);
