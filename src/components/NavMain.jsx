function NavMain() {
  return (
    <div className="fixed bg-white z-[1] top-0">
      <div className="flex gap-4 items-center mt-4 ml-5 ">
        <div className="flex  items-center justify-between w-screen">
          <div className="flex items-center  ">
            <div className="flex items-center">
              <img src="/Pinterest-logo.png" className="w-10" alt="" />
              <h1 className="text-xl text-red-600 font-semibold">Pinterest</h1>
            </div>
            <div className="flex gap-8 font-medium ml-4">
              <div className="flex gap-8">
                <h6>Today</h6>
                <h6>Watch</h6>
                <h6>Explore</h6>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mr-8">
            <div className="flex gap-8 font-medium ml-6">
              <h6>About</h6>
              <h6>Business</h6>
              <h6>Press</h6>
            </div>
            <div className="flex ml-5 gap-4">
              <button className="p-2 pl-2 pr-2 bg-red-600 rounded-3xl text-white font-medium">
                Log in
              </button>
              <button className="p-2 pl-2 pr-2 rounded-3xl bg-slate-200 font-medium">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMain;
