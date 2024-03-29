import Navigation from '@components/Navigation'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { getMyPosts } from '@apis/posts'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import Item from './Item'
import { IPost } from '../../types/posts/index'
import clsx from 'clsx'

function Post() {
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' })
  const business = useSelector((root: RootState) => root.auth.business)
  const [list, setList] = useState<IPost[]>([])
  useEffect(() => {
    if (business?.id === undefined) return
    getMyPosts({ userid: business!.id })
      .then((success) => {
        setList(success.data)
      })
      .catch((error) => console.log(error))
  }, [business])
  return (
    <div className={clsx(styles.container, 'p-3 bg-white flex-1 min-h-full min-w-full')}>
      <Navigation title={t('manager_posts')}></Navigation>
      <div className={styles.tool}>
        <Link to={{ pathname: 'create' }} className={styles.create}>
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
              {list.map((value, index) => {
                return <Item key={index} post={value}></Item>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Post
