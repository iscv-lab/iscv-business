import { getListRequest } from '@apis/iig'
import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'
import { EIIGRequest, ERequestStatus, IIIGRequest } from 'src/types/iig'
import AddLR from '../AddLR'
import AddSW from '../AddSW'
import { Button } from '@components/index'
import { EButton } from '@components/Button'

type Props = {
  //
}

const ListRequest = (props: Props) => {
  const [list, setList] = useState<IIIGRequest[]>([])
  const triggerSuccess = useCallback(() => {
    getListRequest()
      .then((success) => setList(success.data))
      .catch((error) => console.log(error))
  }, [])
  useEffect(() => {
    getListRequest()
      .then((success) => setList(success.data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="overflow-x-auto">
      <h3 className=" font-semibold text-xl px-3">List Request</h3>
      <table className="table table-zebra w-full mt-2">
        {/* head */}
        <thead>
          <tr>
            <th>_id</th>
            <th>employeeId</th>
            <th>examId</th>
            <th>certificateType</th>
            <th>status</th>
            <th>createdAt</th>
            <th>function</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {list.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.employeeId}</td>
                <td>{item.examId}</td>
                <td>{item.certificateType}</td>
                <td>{item.status}</td>
                <td>{moment(item.createdAt).format('DD/MM/YYYY')}</td>
                <td>
                  <div className="flex gap-4">
                    {item.status === ERequestStatus.WAITING &&
                      item.certificateType === EIIGRequest.LR && (
                        <AddLR
                          onSuccess={triggerSuccess}
                          className="w-24 h-12"
                          requestId={item._id}
                          employeeId={item.employeeId}
                        ></AddLR>
                      )}
                    {item.status === ERequestStatus.WAITING &&
                      item.certificateType === EIIGRequest.SW && (
                        <AddSW
                          onSuccess={triggerSuccess}
                          className="w-24 h-12"
                          requestId={item._id}
                          employeeId={item.employeeId}
                        ></AddSW>
                      )}
                    {item.status === ERequestStatus.APPROVED && (
                      <Button type={EButton.Disabled} className="w-24 h-12">
                        APPROVED
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListRequest
