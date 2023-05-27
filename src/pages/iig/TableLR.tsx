import { getListLR } from '@apis/iig'
import { ILR } from '@apis/iig/types'
import React, { useEffect, useState } from 'react'
import moment from 'moment'

type Props = {
  //
}

const TableLR = (props: Props) => {
  const [list, setList] = useState<ILR[]>([])
  useEffect(() => {
    getListLR()
      .then((success) => setList(success.data))
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>employeeId</th>
            <th>testDate</th>
            <th>shiftTest</th>
            <th>expireDate</th>
            <th>listeningScore</th>
            <th>readingScore</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {list.map((item) => {
            return (
              <tr key={item.id}>
                <th>{item.id}</th>
                <th>{item.employeeId}</th>
                <th>{moment.unix(item.testDate).format('DD/MM/YYYY')}</th>
                <th>{item.shiftTest}</th>
                <th>{moment.unix(item.expireDate).format('DD/MM/YYYY')}</th>
                <th>{item.listeningScore}</th>
                <th>{item.readingScore}</th>
                <th>{moment.unix(item.time).format('DD/MM/YYYY')}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableLR
