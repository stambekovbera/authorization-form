import cn from 'classnames';

import { BlockWithTitle } from 'entities/BlockWithTitle';
import { Button } from 'shared/ui';

import styles from './MainPage.module.scss';

interface IMainPageProps {
  className?: string;
}

export const MainPage = (props: IMainPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.wrapper, {}, [className])}>
      <BlockWithTitle title="Выберите действие">
        <div className={styles.content}>
          <Button>Авторизация</Button>
          <Button variant="outlined">Регистрация</Button>
        </div>
      </BlockWithTitle>
    </div>
  );
};
