import home_a from '@assets/home/home_a.png'
import home_b from '@assets/home/home_b.png'
import home_c from '@assets/home/home_c.png'
import home_d from '@assets/home/home_d.png'

function Home() {
  return (
    <div className="flex-1 w-full max-h-full bg-white p-2">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[90vh]">
        <div
          className="col-span-2 rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(' + home_a + ')' }}
        >
          <div>
            <h2 className="uppercase font-medium">lộ trình của bạn</h2>
            <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(' + home_b + ')' }}
          className="row-span-2 col-start-3 rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
        >
          <div>
            <h2 className="uppercase font-medium">lộ trình của bạn</h2>
            <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(' + home_c + ')' }}
          className="row-start-2  rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
        >
          <div>
            <h2 className="uppercase font-medium">lộ trình của bạn</h2>
            <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(' + home_d + ')' }}
          className="row-start-2  rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
        >
          <div>
            <h2 className="uppercase font-medium">lộ trình của bạn</h2>
            <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
