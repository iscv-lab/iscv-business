import { getAllApply } from '@apis/apply'
import { IApplyData } from '@apis/apply/types'
import { IBigFive } from '@apis/bigfive/types'
import Button, { EButton } from '@components/Button'
import { EMPLOYEE_ENDPOINT, IPFS_GATEWAY } from '@constants/index'
import { PostStatus } from '@globaltypes/posts'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { RootState } from '@redux/store'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Status from './Status'
import moment from 'moment'
type Props = {
  //
}

const TableApply = (props: Props) => {
  const [list, setList] = useState<IApplyData[]>([])
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' })
  const business = useSelector((root: RootState) => root.auth.business)

  useEffect(() => {
    if (business?.id === undefined) return
    getAllApply(business!.id)
      .then((success) => setList(success.data))
      .catch((error) => console.log(error))
  }, [business])

  return (
    <table className="table table-zebra w-full overflow-auto">
      {/* head */}
      <thead>
        <tr>
          <th>tools</th>
          <th>employeeName</th>
          <th>postContent</th>
          <th>postHashtag</th>
          <th>postJob</th>
          {/* <th>postStatus</th> */}
          <th>time</th>
          {/* <th>status</th> */}
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {list.map((item) => {
          return (
            <tr key={item.id} className=" hover:bg-blue-100">
              <td className=" sticky top-0 left-0 w-[50px]">
                <Button
                  type={EButton.Rounded}
                  onClick={() =>
                    window.open(
                      `${EMPLOYEE_ENDPOINT}profile/${item.employeeId}/mycv`,
                      '_blank',
                      'noreferrer'
                    )
                  }
                >
                  <i className="fa-regular fa-up-right-from-square"></i>
                </Button>
              </td>
              <td>
                <div className="flex items-center gap-3 w-[300px] truncate">
                  <span>{item.employeeName}</span>
                  <img
                    className="w-24 h-24 rounded-full shrink-0"
                    src={`${IPFS_GATEWAY}${item.employeeSourceImage}`}
                  ></img>
                </div>
              </td>
              <td className=" truncate w-[600px]">{item.postContent}</td>
              <td>{item.postHashtag}</td>
              <td>{item.postJob}</td>
              {/* <td>{item.postStatus}</td> */}
              <td>{moment(item.time * 1000).format('DD/MM/YYYY HH:mm')}</td>
              {/* <td>
                <Status type={item.status}></Status>
              </td> */}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TableApply
