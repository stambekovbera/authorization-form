import cn from 'classnames';
import { type ReactNode } from 'react';

import styles from './Container.module.scss';

interface IContainerProps {
  className?: string;
  children: ReactNode;
  maxWidth?: string | number;
}

export const Container = (props: IContainerProps) => {
  const { className = '', children, maxWidth = '1140px' } = props;

  return (
    <div
      className={cn(styles.wrapper, {}, [className])}
      style={{ maxWidth: maxWidth }}
    >
      {children}
    </div>
  );
};
