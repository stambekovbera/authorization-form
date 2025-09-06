import cn from 'classnames';

import { Button } from 'shared/ui';

import styles from './MainPage.module.scss';

interface IMainPageProps {
  className?: string;
}

export const MainPage = (props: IMainPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.wrapper, {}, [className])}>
      <div>
        <Button>Логин</Button>
        <Button variant="outlined">Регистрация</Button>
      </div>
    </div>
  );
};
