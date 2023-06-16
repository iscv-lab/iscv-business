import { useLoading } from '@components/Loading'

import { API_ENDPOINT_NODEJS, IPFS_GATEWAY } from '@constants/index'
import { useToast } from '@iscv/toast'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { IBusiness } from 'src/globaltypes'
import { ICreatePost, PostStatus } from 'src/globaltypes/posts'
import styles from './styles.module.scss'
import { IPost } from 'src/types/posts'
import { Video } from '..'

type Props = {
  business: IBusiness
  data: IPost
}
function ReviewPost(props: Props) {
  const { business } = props
  const { content, job, hashtag, status, images } = props.data
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
        <a>{hashtag}</a>
      </div>
      <div className={styles.job}>
        <i className="fa-solid fa-tags"></i>
        <a>{job}</a>
      </div>
      <div className={styles.contentWrapper}>
        <p>{content}</p>

        <div className={styles.imageContent}>
          {props.data?.images?.at(0) && (
            <img
              src={`${API_ENDPOINT_NODEJS}public/business/post/${
                props.data?._id
              }/${props.data?.images?.at(0)}.jpeg`}
            ></img>
          )}
          {props.data?.videos?.at(0) && (
            <Video
              video={`${API_ENDPOINT_NODEJS}public/business/post/${
                props.data?._id
              }/${props.data?.videos?.at(0)}.mp4`}
            ></Video>
          )}
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
