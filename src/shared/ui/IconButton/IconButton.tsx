import cn from 'classnames';

import { Button, type IButtonProps } from '../Button/Button';

import styles from './IconButton.module.scss';

interface IIconButtonProps extends Omit<IButtonProps, 'variant'> {
  className?: string;
}

export const IconButton = (props: IIconButtonProps) => {
  const { className, children, ...otherProps } = props;
  return (
    <Button
      {...otherProps}
      className={cn(styles.wrapper, {}, [className])}
      variant="text"
    >
      {children}
    </Button>
  );
};
