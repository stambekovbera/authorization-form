import cn from 'classnames';

import styles from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
  size?: 12 | 16 | 24 | 36 | 48 | 50;
  color?: string;
  strokeWidth?: 1 | 2 | 3 | 4 | 5;
}

export const Loader = (props: ILoaderProps) => {
  const {
    className = '',
    size = 50,
    color = 'var(--primary-color)',
    strokeWidth = 4,
  } = props;

  return (
    <div
      className={cn(styles.wrapper, {}, [className])}
      style={{ width: size, borderColor: color, borderWidth: strokeWidth }}
    ></div>
  );
};
