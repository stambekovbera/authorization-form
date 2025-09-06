import cn from 'classnames';

import styles from './Loader.module.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader = (props: ILoaderProps) => {
  const { className = '' } = props;

  return <div className={cn(styles.wrapper, {}, [className])}></div>;
};
