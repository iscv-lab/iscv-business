import AddLR from './AddLR'
import AddSW from './AddSW'
import TableLR from './TableLR'

type Props = {
  //
}

const IIG = (props: Props) => {
  return (
    <div>
      <div className="flex gap-5 flex-col">
        <div className="flex gap-4">
          <AddLR className="w-32"></AddLR>
          <AddSW className="w-32"></AddSW>
        </div>

        <div>
          <TableLR></TableLR>
        </div>
      </div>
    </div>
  )
}

export default IIG
