import TableBigFive from './TableBigFive'

type Props = {
  //
}

const BigFive = (props: Props) => {
  return (
    <div className="flex gap-5 flex-col min-h-full relative">
      <TableBigFive></TableBigFive>
    </div>
  )
}

export default BigFive
