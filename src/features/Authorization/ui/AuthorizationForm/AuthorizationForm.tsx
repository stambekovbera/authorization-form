import cn from 'classnames';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { ControllerTextField } from 'entities/RHFController';

import type { TAuthorizationForm } from '../../types/authorizationForm';

import styles from './AuthorizationForm.module.scss';

interface IAuthorizationFormProps {
  className?: string;
}

const AuthorizationFormComponent = (props: IAuthorizationFormProps) => {
  const { className = '' } = props;

  const { control } = useFormContext<TAuthorizationForm>();

  return (
    <div className={cn(styles.wrapper, {}, [className])}>
      <ControllerTextField
        control={control}
        name="email"
        textFieldProps={{
          label: 'Email',
        }}
      />

      <ControllerTextField
        control={control}
        name="password"
        textFieldProps={{
          label: 'Пароль',
        }}
      />
    </div>
  );
};

export const AuthorizationForm = memo(AuthorizationFormComponent);
