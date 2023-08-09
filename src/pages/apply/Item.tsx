import { IApplyData } from '@apis/apply/types'
import { IPFS_GATEWAY } from '@constants/index'
import moment from 'moment'
import styles from './styles.module.scss'

type Props = {
  data: IApplyData
}
function Item({ data }: Props) {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.employeeId}</td>
      <td>
        <div className={styles.name}>
          <img src={`${IPFS_GATEWAY}${data.employeeSourceImage}`}></img>
          <span>{data.employeeName}</span>
        </div>
      </td>
      <td>{data.postId}</td>
      {/* <td>
        <PostStatus type={status}></PostStatus>
      </td> */}
      <td>{moment(data.time).format('DD/MM/YYYY HH:mm')}</td>
    </tr>
  )
}

export default Item
