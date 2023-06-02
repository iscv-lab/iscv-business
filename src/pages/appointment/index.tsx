import Navigation from '@components/Navigation'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import { getMyPosts } from '@apis/post'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import Item from './Item'
import { IPost } from 'src/types/posts'

function Appointment() {
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' })
  const business = useSelector((root: RootState) => root.auth.business)
  const [list, setList] = useState<IPost[]>([])
  useEffect(() => {
    if (business?.id) return
    getMyPosts({ userid: business!.id })
      .then((success) => setList(success.data))
      .catch((error) => console.log(error))
  }, [business])
  return (
    <>
      <div className={styles.container}>
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
    </>
  )
}

export default Appointment
