import home_a from '@assets/home/home_a.png'
import home_b from '@assets/home/home_b.png'
import home_c from '@assets/home/home_c.png'
import home_d from '@assets/home/home_d.png'
import LogoCV from '@assets/LogoCV.png'

function Home() {
  return (
    <div className="flex-1 w-full max-h-full bg-white p-2">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[90vh]">
        <div className="col-span-2 rounded-xl bg-no-repeat bg-gradient-white w-full h-full flex justify-center items-end relative">
          <div className="absolute top-[4rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[6rem] w-64 rounded-2xl  flex justify-center items-center ">
            <img src={LogoCV} alt="logo" className="object-contain"></img>
          </div>
          <h2 className="uppercase font-medium text-gray-700 font-quicksand  text-2xl mb-3">
            Chào mừng bạn đến với hệ thống ISCV
          </h2>
        </div>
        <div
          style={{ backgroundImage: 'url(' + home_b + ')' }}
          className="row-span-2 col-start-3 rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
        >
          <div>
            <h2 className="uppercase font-medium">Hệ thống lưu trữ CV phân tán</h2>
            {/* <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p> */}
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(' + home_c + ')' }}
          className="row-start-2  rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
        >
          <div>
            <h2 className="uppercase font-medium">Hệ thống Layer2 ISCV</h2>
            {/* <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p> */}
          </div>
        </div>
        <div
          style={{ backgroundImage: 'url(' + home_d + ')' }}
          className="row-start-2  rounded-xl overflow-hidden p-6 bg-cover bg-no-repeat"
        >
          <div>
            <h2 className="uppercase font-medium">Hệ thống Layer1 ISCV</h2>
            {/* <p className="text-sm text-[#4F4F4F]">Tiến độ 15%</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
