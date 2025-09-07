import cn from 'classnames';
import type { ReactNode } from 'react';

import { Typography } from 'shared/ui';

import styles from './BlockWithTitle.module.scss';

interface IBlockWithTitleProps {
  className?: string;
  children: ReactNode;
  title: string;
}

export const BlockWithTitle = (props: IBlockWithTitleProps) => {
  const { className, children, title } = props;
  return (
    <div className={cn(styles.wrapper, {}, [className])}>
      <Typography variant="h1">{title}</Typography>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
