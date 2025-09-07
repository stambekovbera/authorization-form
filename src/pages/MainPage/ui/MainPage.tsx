import cn from 'classnames';
import { useNavigate } from 'react-router';

import { useAppSelector } from 'app/providers';
import { BlockWithTitle } from 'entities/BlockWithTitle';
import { authorizationSelectors } from 'features/Authorization';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const';
import { Button, Typography } from 'shared/ui';

import styles from './MainPage.module.scss';

interface IMainPageProps {
  className?: string;
}

export const MainPage = (props: IMainPageProps) => {
  const { className } = props;

  const user = useAppSelector(authorizationSelectors.getUser);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    navigate('/login');
  };

  return (
    <div className={cn(styles.wrapper, {}, [className])}>
      <BlockWithTitle title="Профиль">
        <div className={styles.content}>
          <Typography>{user?.first_name}</Typography>
          <Typography>{user?.last_name}</Typography>
          <Typography>{user?.email}</Typography>

          <Button onClick={logout}>Выйти</Button>
        </div>
      </BlockWithTitle>
    </div>
  );
};
