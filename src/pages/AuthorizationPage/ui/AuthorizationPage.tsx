import cn from 'classnames';

import { Authorization } from 'features/Authorization';

import styles from './AuthorizationPage.module.scss';

interface IAuthorizationPageProps {
  className?: string;
}

export const AuthorizationPage = (props: IAuthorizationPageProps) => {
  const { className = '' } = props;

  return (
    <div className={cn(styles.wrapper, {}, [className])}>
      <Authorization />
    </div>
  );
};
