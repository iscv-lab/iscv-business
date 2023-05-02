import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next'
import Navigation from '@components/Navigation'
import PagePost from '@components/PagePost'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPost } from '@apis/shared/post'
import { IPost } from 'src/types/posts'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'

// Dashboard/ViewPost/index
function ViewPost() {
  const id = useParams().id
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' })
  const business = useSelector((state: RootState) => state.auth.business)
  const [post, setPost] = useState<IPost | undefined>()
  useEffect(() => {
    getPost({ id: Number(id) })
      .then((success) => setPost(success.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Navigation title={t('view_post')} to={-1}></Navigation>
        <div className={styles.preview}>
          {post && business && <PagePost data={post} business={business}></PagePost>}
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
  )
}

export default ViewPost
