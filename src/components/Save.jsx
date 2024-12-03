function Save() {
  return (
    <div className="bg-[#9ed5dde9] lg:flex lg:justify-between h-[800px]  lg:items-center overflow-hidden gap-24 ">
      <div className="text-[#2d635c] lg:ml-[100px] lg:w-[1013px] text-center">
        <h1 className="text-6xl font-bold">Save ideas you like</h1>
        <p className="text-2xl">
          Collect yout favourites so you can get back to them later
        </p>
        <button className="p-2 bg-red-500 text-white font-semibold rounded-full">
          Explore
        </button>
      </div>
      <div className="w-full">
        <div className="relative  ml-3 lg:w-full top-8">
          <div className="relative ">
            <div className="absolute">
              <img src="img\img2\pintrest1.png" className="w-[400px] " alt="" />

              <div className=" w-96 absolute top-[4rem] left-7">
                <p className=" text-6xl font-semibold text-white   ">
                  Fern future home vibes
                </p>
              </div>

              <div className="flex gap-4 absolute top-[16rem]  left-10">
                <img
                  src="img\img2\future-home1-b8bc36e8.png"
                  className="w-24 h-36"
                  alt=""
                />
                <img
                  src="img\img2\future-home2-31c812cc.png"
                  className="w-24 h-36"
                  alt=""
                />
                <img
                  src="img\img2\future-home3-037e8d49.png"
                  className="w-24 h-36"
                  alt=""
                />
              </div>
            </div>

            <div className="absolute top-0 left-[30rem]  ">
              <img src="img\img2\pinterest2.png" alt="" className="w-60 " />
              <p className="absolute top-[100px] left-4 font-semibold text-white text-3xl w-[50px]">
                My Scandinavian bedroom
              </p>
            </div>

            <div className="absolute h-fit top-[280px] left-[447px]">
              <img src="img\img2\pinterest3.png" alt="" className="w-48 " />
              <p className="relative w-[150px] text-white top-[-80px] left-4 font-semibold text-xl">
                The decking of my dreams
              </p>
            </div>

            <div className=" absolute top-[500px] left-[429px]">
              <img src="img\img2\pinterest5.png" className="w-[250px]" alt="" />
              <p className="relative top-[-170px] left-5 text-white font-semibold text-3xl w-[140px]">
                Our bathroom upgrade
              </p>
            </div>
            <div className="absolute left-[159px] top-[460px]">
              <img src="img\img2\pinterest4.png" className="w-[230px]" alt="" />
              <p className="relative top-[-170px] left-5 text-white font-semibold text-3xl w-[140px]">
                Serve my drinks in style
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Save;
