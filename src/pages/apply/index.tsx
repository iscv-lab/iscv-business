import { getMyPosts } from '@apis/post'
import { RootState } from '@redux/store'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Item from './Item'
import styles from './styles.module.scss'
import { getAllApply } from '@apis/apply'
import { IApplyData } from '@apis/apply/types'

function Apply() {
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' })
  const business = useSelector((root: RootState) => root.auth.business)
  const [list, setList] = useState<IApplyData[]>([])
  useEffect(() => {
    if (business?.id) return
    getAllApply(business!.id)
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
                  <th>id</th>
                  <th>employeeId</th>
                  <th>employeeName</th>
                  <th>postId</th>
                  <th>time</th>
                </tr>
              </thead>
              <tbody>
                {list.map((value) => {
                  return <Item key={value.id} data={value}></Item>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Apply
