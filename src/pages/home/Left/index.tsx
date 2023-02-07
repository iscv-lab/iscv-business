import avatarDefault from '@assets/avatar.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { routes } from '../config';
import styles from './styles.module.scss';
function Index() {
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.index' });
  const [searchParams] = useSearchParams();
  const [avatar, setAvatar] = useState();

  const tab = searchParams.get('tab');

  const active = Object(routes)[tab!] ? tab : 'main';

  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <img src={avatar || avatarDefault}></img>
        <div className={styles.titleWrapper}>
          {/* <a className={styles.title}>{loginState.profile.name}</a> */}
          <p className={styles.text}>Group</p>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        {/* {Object.keys(routes).map((key) => {
          const item = (
            <Link
              key={key}
              to={`/dashboard?tab=${routes[key].to}`}
              className={clsx(styles.tab, { [styles.active]: active == key })}
            >
              <i className={routes[key].icon}></i>
              <a>{t(routes[key].name)}</a>
            </Link>
          )
          if (routes[key].category) {
            if (routes[key].category == parseInt(loginState.profile.category)) {
              return item
            } else {
              return <></>
            }
          }
          return item
        })} */}
      </div>
    </div>
  );
}

export default Index;
