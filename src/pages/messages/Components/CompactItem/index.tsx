import avatarDefault from '@assets/avatar.png'
import clsx from 'clsx'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from './styles.module.scss'
import { IRecent } from 'src/types/messages'
import { IPFS_GATEWAY } from '@constants/index'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent } from '@redux/reducers/messages'
import { RootState } from '@redux/store'

type Props = {
  expand: boolean
  data: IRecent
}
function Index({ expand, data }: Props) {
  const id = useParams().id
  const dispatch = useDispatch()
  const current = useSelector((state: RootState) => state.messages.current)
  return (
    <Link
      onClick={() => dispatch(setCurrent({ employeeId: data.id }))}
      to={''}
      className={clsx(styles.container, {
        [styles.active]: current === data.id,
        [styles.expand]: expand
      })}
    >
      <div className={styles.left}>
        <div className={styles.icon}>
          <img src={`${IPFS_GATEWAY}${data.sourceImage}`}></img>
        </div>

        <div className={clsx(styles.text)}>
          <div className={styles.name}>{data.name}</div>
          {/* <div className={styles.message}>Lorem ipsum dolor sit am</div> */}
        </div>
      </div>
      {/* <div className={styles.right}>
        <div className={styles.time}>10:45</div>
        <div className={styles.count}>10</div>
      </div> */}
    </Link>
  )
}

export default Index
