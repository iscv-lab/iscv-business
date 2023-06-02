import { IPFS_GATEWAY } from '@constants/index'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import PostStatus from './PostStatus'
import styles from './styles.module.scss'

function Item({ post }: { post: any }) {
  const { job, time, status, content, id, imageSource } = post
  const navigate = useNavigate()

  const gotoViewPost = () => {
    navigate({ pathname: `view/${id}` })
  }
  return (
    <tr onClick={gotoViewPost}>
      <td>
        <div className={styles.name}>
          <img src={`${IPFS_GATEWAY}${imageSource}`}></img>
          <p>{job}</p>
        </div>
      </td>
      <td>{new Date(time).toLocaleString()}</td>
      <td>
        <PostStatus type={status}></PostStatus>
      </td>
      <td>
        <div className={styles.detail}>
          {/* <div className={styles.recruit}>Mobile App</div> */}
          <p>{content}</p>
        </div>
      </td>
      <td>
        <div className={styles.apply}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
              <img
                className={styles.itemIcon}
                src="https://image.thanhnien.vn/1200x630/Uploaded/2022/zxaijr/2021_03_16/rosealbumkyluc1_lgic.png"
              ></img>
              <div className={clsx(styles.itemIcon, styles.push)}>+1</div>
            </div>
            <p className={styles.quantity}> {/* {list?.length} {t('applier')} */}</p>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default Item
