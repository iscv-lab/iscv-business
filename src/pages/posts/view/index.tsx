import Navigation from '@components/Navigation';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router-dom';
import styles from './styles.module.scss';
import { GetPost, getPost } from '@graphql/Posts';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { GetBusinessByUser, getBusinessByUser } from '@graphql/Business';
import PagePost from '@components/PagePost';

// Dashboard/ViewPost/index
function ViewPost() {
  let { id } = useParams();
  const account = useSelector((state: RootState) => state.auth.account);
  const userQuery = useQuery<GetBusinessByUser>(getBusinessByUser, {
    variables: { user: account },
    notifyOnNetworkStatusChange: true,
  });

  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' });
  const postQuery = useQuery<GetPost>(getPost, {
    variables: { postId: Number(id) },
  });

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navigation title={t('view_post')} to={-1}></Navigation>
        <div className={styles.preview}>
          {postQuery.data?.post && userQuery.data?.businessByUser && (
            <PagePost
              data={postQuery.data.post}
              business={userQuery.data.businessByUser}
            ></PagePost>
          )}
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
            <div className={styles.wrapper}></div>
          </div>
          <div className={styles.group}>
            <div className={styles.top}>
              <div className={styles.name}>{t('seen')}</div>
            </div>
            <div className={styles.wrapper}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPost;
