import AddLR from './AddLR'
import AddSW from './AddSW'
import ListRequest from './ListRequest'
import TableLR from './TableLR'

type Props = {
  //
}

const IIG = (props: Props) => {
  return (
    <div>
      <div className="flex gap-5 flex-col">
        <div className="flex flex-col gap-5">
          <TableLR></TableLR>
          <ListRequest></ListRequest>
        </div>
      </div>
    </div>
  )
}

export default IIG
