import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { PostStatus } from 'src/types/posts';
import { toLower } from 'lodash';

function Index({ type }: { type: PostStatus }) {
  const { t } = useTranslation('component', { keyPrefix: 'postItem.index' });
  return (
    <div className={clsx(styles.container, Object(styles)[PostStatus[type].toLowerCase()])}>
      <a>{t(PostStatus[type].toLowerCase())}</a>
    </div>
  );
}

export default Index;
