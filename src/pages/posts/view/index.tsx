import Navigation from '@components/Navigation';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';

// Dashboard/ViewPost/index
function ViewPost() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navigation title={t('view_post')} to={'-1'}></Navigation>
        <div className={styles.preview}>
          {/* {post && (
            <PostItem
              key={0}
              id={loginState.id}
              name={loginState.profile.name}
              typeFor={'business'}
              {...post}
            ></PostItem>
          )} */}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <p>{t('request')}</p>
        </div>
        <div className={styles.content}>
          <div className={styles.group}>
            <div className={styles.top}>
              <div className={styles.name}>{t('new')}</div>
            </div>
            <div className={styles.wrapper}>
              {/* {post &&
                listNew?.map((value, index) => {
                  return <ItemRequest key={index} {...value} job={post.job}></ItemRequest>
                })} */}
              {/* {isLoadingNew && <ContentLoader></ContentLoader>} */}
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.top}>
              <div className={styles.name}>{t('seen')}</div>
            </div>
            <div className={styles.wrapper}>
              {/* {post &&
                listSeen?.map((value, index) => {
                  return <ItemRequest key={index} {...value} job={post.job} disabled></ItemRequest>
                })} */}
              {/* {isLoadingSeen && <ContentLoader></ContentLoader>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
