import { useQuery } from '@apollo/client';
import avatarDefault from '@assets/avatar.png';
import { GetBusinessByUser, getBusinessByUser } from '@graphql/Business';
import { RootState } from '@redux/store';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  NavLink,
  Outlet,
  matchRoutes,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import clsx from 'clsx';
import styles from './styles.module.scss';
import { routes } from 'src/routes';
function Index() {
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.index' });
  const [searchParams] = useSearchParams();
  const [avatar, setAvatar] = useState();

  const tab = searchParams.get('tab');
  const account = useSelector((state: RootState) => state.auth.account);

  const { loading, error, data, refetch, subscribeToMore, client } = useQuery<GetBusinessByUser>(
    getBusinessByUser,
    {
      variables: { user: account },
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <>
      <aside className={styles.container}>
        <div className={styles.topWrapper}>
          <img src={avatar || avatarDefault}></img>
          <div className={styles.titleWrapper}>
            <a className={styles.title}>{data?.businessByUser?.name}</a>
            <p className={styles.text}>Group</p>
          </div>
        </div>
        <div className={styles.tableWrapper}>
          {routes
            .at(0)
            ?.children.find((x) => x.name === 'sidebar')
            ?.children.map((value, index) => {
              return (
                <NavLink
                  key={value.path}
                  to={value.path}
                  className={({ isActive }) => clsx(styles.tab, { [styles.active]: isActive })}
                >
                  <i className={value.icon}></i>
                  <span>{t(value.name)}</span>
                </NavLink>
              );
            })}
        </div>
      </aside>
      <div className={styles.main}>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Index;
