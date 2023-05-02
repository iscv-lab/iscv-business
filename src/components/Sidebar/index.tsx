import { routes } from 'src/routes'
import styles from './styles.module.scss'
import { NavLink, Outlet } from 'react-router-dom'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { getBusiness } from '@apis/profile'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import avatarDefault from '@assets/avatar.png'
import { IPFS_GATEWAY } from '@constants/index'

function Index() {
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.index' })
  const [data, setData] = useState()
  const business = useSelector((state: RootState) => state.auth.business)

  if (business)
    return (
      <>
        <aside className={styles.container}>
          <div className={styles.topWrapper}>
            <img src={`${IPFS_GATEWAY}${business.sourceImage}`}></img>
            <div className={styles.titleWrapper}>
              <a className={styles.title}>{business.name}</a>
              <p className={styles.text}>Group</p>
            </div>
          </div>
          <div className={styles.tableWrapper}>
            {routes
              .at(0)
              ?.children.find((x) => x.name === 'sidebar')
              ?.children.map((value) => {
                return (
                  <NavLink
                    key={value.path}
                    to={value.path}
                    className={({ isActive }) => clsx(styles.tab, { [styles.active]: isActive })}
                  >
                    <i className={value.icon}></i>
                    <span>{t(value.name)}</span>
                  </NavLink>
                )
              })}
          </div>
        </aside>
        <div className={styles.main}>
          <Outlet></Outlet>
        </div>
      </>
    )
  return <h1>hello</h1>
}

export default Index
