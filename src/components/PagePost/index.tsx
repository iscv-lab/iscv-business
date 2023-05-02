import { useLoading } from '@components/Loading'

import { IPFS_GATEWAY } from '@constants/index'
import { useToast } from '@iscv/toast'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { IPost, PostStatus } from 'src/types/posts'
import styles from './styles.module.scss'
import { IBusiness } from 'src/types'

type Props = {
  business: IBusiness
  data: IPost
}
function ReviewPost(props: Props) {
  const { business } = props
  const { content, job, hashTag, status, imageSource } = props.data
  const [openClose, setOpenClose] = useState(false)
  const { t } = useTranslation('component', { keyPrefix: 'postItem.index' })
  const toast = useToast()
  const loading = useLoading()
  return (
    <div className={clsx(styles.item, styles.disabled)}>
      <div className={styles.head}>
        <div className={styles.personalWrapper}>
          <Link to={`/page/${business?.id}`} className={styles.avatarWrapper}>
            <img src={`${IPFS_GATEWAY}${business?.sourceImage}`}></img>
          </Link>
          <div className={styles.avatarTextWrapper}>
            <Link to={`/page/${business?.id}`} className={styles.name}>
              {business?.name}
            </Link>
            <div className={styles.date}>{new Date().toLocaleString()}</div>
            <div className={clsx(styles.container, styles[PostStatus[status].toLowerCase()])}>
              <a>{t(PostStatus[status].toLowerCase())}</a>
            </div>
          </div>
        </div>
        <div className={styles.option}>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>
      <div className={styles.hashtag}>
        <i className="fa-regular fa-hashtag"></i>
        <a>{hashTag}</a>
      </div>
      <div className={styles.job}>
        <i className="fa-solid fa-tags"></i>
        <a>{job}</a>
      </div>
      <div className={styles.contentWrapper}>
        <p>{content}</p>

        <div className={styles.imageContent}>
          {imageSource && <img src={`${IPFS_GATEWAY}${imageSource}`} alt="post"></img>}
          {!imageSource && <i className={clsx('fa-duotone fa-image')}></i>}
        </div>
      </div>
      <div className={styles.foot}>
        <div className={styles.footItem}>
          <i className="fa-regular fa-heart"></i>
          <div className={styles.footItemTitle}> {t('like')}</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-regular fa-comment"></i>
          <div className={styles.footItemTitle}> {t('comment')}</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-regular fa-bookmark"></i>
          <div className={styles.footItemTitle}> {t('bookmark')}</div>
        </div>
        <div className={styles.footItem}>
          <i className="fa-light fa-share-nodes"></i>
          <div className={styles.footItemTitle}> {t('share')}</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewPost
