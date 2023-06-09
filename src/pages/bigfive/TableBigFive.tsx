import { getBigFive } from '@apis/bigfive'
import { IBigFive } from '@apis/bigfive/types'
import Button, { EButton } from '@components/Button'
import { Modal } from '@components/index'
import { API_ENDPOINT_NODEJS, IPFS_GATEWAY } from '@constants/index'
import { Viewer, Worker, PdfJs } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { RootState } from '@redux/store'
import { SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type Props = {
  //
}

const TableBigFive = (props: Props) => {
  const [list, setList] = useState<IBigFive[]>([])
  const businessId = useSelector((state: RootState) => state.auth.business)!.id
  useEffect(() => {
    getBigFive(businessId)
      .then((success) => setList(success.data))
      .catch((error) => console.log(error))
  }, [])
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const [open, setOpen] = useState<
    | {
        bigfiveId: string
        interviewId: string
      }
    | undefined
  >()
  return (
    <div>
      {open && (
        <Modal
          setShow={() => setOpen(undefined)}
          title={
            <div className=" text-white text-xl w-full font-semibold text-center">Big Five</div>
          }
        >
          <div className="">
            {open && (
              <Worker workerUrl={'https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js'}>
                <Viewer
                  fileUrl={`${API_ENDPOINT_NODEJS}machine/interview/${open.interviewId}/report.pdf`}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            )}
          </div>
        </Modal>
      )}
      <table className="table table-zebra w-full overflow-auto">
        {/* head */}
        <thead>
          <tr>
            <th>tools</th>
            <th>employeeId</th>
            <th>employeeName</th>
            <th>employeeImage</th>
            <th>employeeProfessional</th>
            <th>interviewId</th>
            <th>Agreeableness Comment</th>
            <th>Agreeableness Score</th>
            <th>Conscientiousness Comment</th>
            <th>Conscientiousness Score</th>
            <th>Extroversion Comment</th>
            <th>Extroversion Score</th>
            <th>Neuroticism Comment</th>
            <th>Neuroticism Score</th>
            <th>Openness to Experience Comment</th>
            <th>Openness to Experience Score</th>
            <th>updatedAt</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {list.map((item) => {
            return (
              <tr key={item._id} className=" hover:bg-blue-100">
                <td className=" sticky top-0 left-0">
                  <Button
                    type={EButton.Rounded}
                    onClick={() =>
                      setOpen({
                        bigfiveId: item._id,
                        interviewId: item.interviewId
                      })
                    }
                  >
                    <i className="fa-regular fa-up-right-from-square"></i>
                  </Button>
                </td>
                <td>{item['employeeId']}</td>
                <td>{item['employeeName']}</td>
                <td>
                  <img src={`${IPFS_GATEWAY}${item['employeeImage']}`}></img>
                </td>
                <td>{item['employeeProfessional']}</td>
                <td>{item['interviewId']}</td>
                <td>{item['Agreeableness Comment']}</td>
                <td>{item['Agreeableness Score']}</td>
                <td>{item['Conscientiousness Comment']}</td>
                <td>{item['Conscientiousness Score']}</td>
                <td>{item['Extroversion Comment']}</td>
                <td>{item['Extroversion Score']}</td>
                <td>{item['Neuroticism Comment']}</td>
                <td>{item['Neuroticism Score']}</td>
                <td>{item['Openness to Experience Comment']}</td>
                <td>{item['Openness to Experience Score']}</td>
                <td>{item['updatedAt'].toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableBigFive
