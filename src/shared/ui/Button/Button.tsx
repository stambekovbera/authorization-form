import cn from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './Button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'contained' | 'outlined' | 'text';
}

export const Button = (props: IButtonProps) => {
  const { children, className, variant = 'contained' } = props;

  return (
    <button
      className={cn(styles.wrapper, {}, [
        styles[variant],
        className,
      ])}
    >
      {children}
    </button>
  );
};
