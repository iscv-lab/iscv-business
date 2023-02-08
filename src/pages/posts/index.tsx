import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Navigation from '@components/Navigation';
import styles from './styles.module.scss';
import { routes } from 'src/routes';
import { useQuery } from '@apollo/client';
import { GetPosts, GetPostsByBusinessId, getPostsByBusinessId } from '@graphql/Posts';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { GetBusinessByUser, getBusinessByUser } from '@graphql/Business';
import Item from './Item';

function Index() {
  const account = useSelector((state: RootState) => state.auth.account);
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' });
  const queryUser = useQuery<GetBusinessByUser>(getBusinessByUser, {
    variables: { user: account },
    notifyOnNetworkStatusChange: true,
  });

  const queryPosts = useQuery<GetPostsByBusinessId>(getPostsByBusinessId, {
    variables: {
      businessId: queryUser.data?.businessByUser.id,
    },
  });

  return (
    <>
      <div className={styles.container}>
        <Navigation title={t('manager_posts')}></Navigation>
        <div className={styles.tool}>
          <Link
            to={`${
              routes
                .at(0)
                ?.children.find((x) => x.name === 'posts')
                ?.children?.find((x) => x.name === 'create')?.path
            }`}
            className={styles.create}
          >
            {t('create_post')}
          </Link>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.panel}>
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th>{t('post_name')}</th>
                  <th>{t('date')}</th>
                  <th>{t('status')}</th>
                  <th>{t('content')}</th>
                  <th>{t('applied')}</th>
                </tr>
              </thead>
              <tbody>
                {queryPosts.data?.postsByBusinessId?.map((value, index) => {
                  return <Item key={index} post={value}></Item>;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
