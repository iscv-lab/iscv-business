import { IPFS_GATEWAY } from '@constants/index'
import clsx from 'clsx'
import { useNavigate } from 'react-router-dom'
import PostStatus from './PostStatus'
import styles from './styles.module.scss'
import { IPost } from 'src/types/posts'
import moment from 'moment'

function Item({ post }: { post: IPost }) {
  const navigate = useNavigate()

  const gotoViewPost = () => {
    navigate({ pathname: `view/${post._id}` })
  }
  return (
    <tr onClick={gotoViewPost}>
      <td>
        <div className={styles.name}>
          <div className="w-12 h-12 rounded-full flex justify-center items-center bg-pink-50 border-red-100 border-[1px]">
            <i className="fa-solid fa-photo-film-music "></i>
          </div>

          <p>{post.job}</p>
        </div>
      </td>
      <td>{moment(post.updatedAt).format('DD/MM/YYYY HH:mm:ss')}</td>
      <td>
        <PostStatus type={post.status}></PostStatus>
      </td>
      <td>
        <div className={styles.detail}>
          {/* <div className={styles.recruit}>Mobile App</div> */}
          <p>{post.content}</p>
        </div>
      </td>
      <td>
        <div className={styles.apply}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}>
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
