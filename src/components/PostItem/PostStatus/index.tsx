import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { PostStatus } from 'src/types/posts';

function Index({ type }: { type: PostStatus }) {
  const { t } = useTranslation('component', { keyPrefix: 'postItem.index' });
  return (
    <div className={clsx(styles.container, Object(styles)[type])}>
      <a>{t(PostStatus[type])}</a>
    </div>
  );
}

export default Index;
