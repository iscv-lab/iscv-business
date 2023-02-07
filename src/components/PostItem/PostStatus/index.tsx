import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { IStatus } from './types';

function Index({ type }: { type: IStatus }) {
  const { t } = useTranslation('component', { keyPrefix: 'postItem.index' });
  return (
    <div className={clsx(styles.container, Object(styles)[type])}>
      <a>{t(IStatus[type])}</a>
    </div>
  );
}

export default Index;
