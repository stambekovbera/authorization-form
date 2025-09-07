import cn from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { Loader } from '../Loader/Loader';

import styles from './Button.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
  loading?: boolean;
}

export const Button = (props: IButtonProps) => {
  const {
    children,
    className,
    variant = 'contained',
    loading,
    disabled,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      className={cn(
        styles.wrapper,
        {
          [`${styles.loading}`]: loading,
        },
        [
          styles[variant],
          className,
        ],
      )}
      disabled={disabled || loading}
    >
      {loading ? (
        <Loader
          size={12}
          strokeWidth={3}
          color={
            variant === 'contained'
              ? 'var(--contrast-text-color)'
              : 'var(--primary-color)'
          }
        />
      ) : (
        children
      )}
    </button>
  );
};
