import cn from 'classnames';

import styles from './AuthorizationPage.module.scss';

interface IAuthorizationPageProps {
  className?: string;
}

export const AuthorizationPage = (props: IAuthorizationPageProps) => {
  const { className = '' } = props;

  return <div className={cn(styles.wrapper, {}, [className])}></div>;
};
