import { Loader } from 'shared/ui';

import styles from './PageLoader.module.scss';

export const PageLoader = () => {
  return (
    <div className={styles.wrapper}>
      <Loader />
    </div>
  );
};
