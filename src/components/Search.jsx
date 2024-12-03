function Search() {
  return (
    <div className="bg-[#f6f399]  h-screen overflow-x-hidden ">
      <div className="relative left-6">
        <img
          src="/img/topRight-6902088a.png"
          className="w-44 relative left-[328px] top-[80px]"
          alt=""
        />
        <img
          src="/img/left-ccce7532.png"
          className="w-56 absolute top-[170px]"
          alt=""
        />
        <img
          src="/img/right-2bd1edfc.png"
          className="w-40 absolute left-[328px] top-[400px]"
          alt=""
        />
        <img
          src="/img/center-2d76a691.png"
          className="w-72 absolute left-[150px] top-[100px]"
          alt=""
        />
      </div>
      <div>
        <input
          type="text"
          className="relative w-[300px] h-[100px] rounded-full left-[10%] top-[12
          25px] "
          placeholder="🔍 easy chicken dinner"
        />
      </div>
      <div className="text-[#6f224d] relative  top-[-25%]  left-[21%] lg:right-[200px] flex flex-col justify-center items-center">
        <h1 className="text-6xl w-[500px] font-bold">Search for an idea</h1>
        <div className="text-center ">
          <p className="text-3xl max-w-[500px]">
            What do you want to try next? Think of something you’re into – such
            as &#39;easy chicken dinner&#39; – and see what you find.
          </p>

          <button className="bg-red-600 p-2 rounded-full text-white">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
