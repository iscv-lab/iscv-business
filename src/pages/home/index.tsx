import business from '@assets/home/business.png'
function Home() {
  return (
    <div className="flex-1 w-full h-full bg-white p-2">
      <div className="w-full h-full flex">
        <img className="flex-1 object-cover p-8 max-w-[400px]" src={business}></img>
        <div className="flex-1 flex flex-col items-start justify-center px-12 gap-5">
          <h1 className=" text-[#6A53F0] text-8xl font-extralight">Grow your</h1>
          <h2 className=" text-[#6A53F0] text-7xl font-semibold">Business</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
