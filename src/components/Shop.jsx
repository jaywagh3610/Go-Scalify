function Shop() {
  return (
    <div className="bg-[#f6cce9] h-[730px] flex">
      <div className="relative w-[50%]">
        <img
          src="public\shop-de8ddf10.png"
          alt=""
          className="w-[80%] lg:w-[100%] h-[730px] absolute object-cover"
        />
        <img
          src="public\creator-pin-img-3bed5463.png"
          alt=""
          className="w-56 relative top-[190px] left-[7rem] rounded-2xl"
        />
        <img
          src="creator-avatar-262dfeba.png"
          className="relative top-[120px] left-[6rem]"
          alt=""
        />

        <div className="relative  text-white top-[70px] left-[14rem]">
          <p>Scout the City</p>
          <p>56.7k followers</p>
        </div>
      </div>
      <div className="relative w-[50%] right-2 text-center flex flex-col justify-center items-center">
        <div className="max-w-[400px]">
          <h1 className="text-6xl font-bold text-[#b13636]">
            See it, make it, try it, do it
          </h1>
          <p className="text-[#b13636] text-2xl font-base">
            The best part of Pinterest is discovering new things and ideas from
            people around the world.
          </p>
          <button className="bg-[#b13636] text-white p-3 rounded-full">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
