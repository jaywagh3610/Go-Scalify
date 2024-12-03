function Holloween() {
  return (
    <div className="bg-[#ebc7ae] h-[728px] overflow-hidden ">
      <div className="relative   lg:left-[35rem]">
        <img
          src="img\Holloweenimg\halloween-home-decor-1b35a6fe.png"
          className="w-96 absolute left-[8rem] top-8
          "
          alt=""
        />
        <img
          src="img\Holloweenimg\halloween-recipes-69e95ddd.png"
          alt=""
          className="w-52 absolute left-[34rem] top-6"
        />

        <img
          src="img\Holloweenimg\halloween-costumes-e7c84dcf.png"
          alt=""
          className="w-36 absolute left-[33rem] top-72"
        />
        <img
          src="img\Holloweenimg\halloween-baby-costumes-943abcdc.png"
          className="w-52 absolute left-[15rem] top-[28rem]"
          alt=""
        />
        <img
          src="img\Holloweenimg\halloween-pets-costumes-96626899.png"
          alt=""
          className="w-52 absolute left-[32rem] top-[30rem]"
        />
      </div>
      <div className="text-[#b13636] w-[50%]  flex flex-col justify-center items-center relative right-6 top-[250px] lg:text-center">
        <h1 className="text-6xl font-bold ">Dive into trends</h1>

        <p className="font-medium text-xl max-w-[600px]">
          Unlesh your creativity this holloween with a collection of
          spookctacular ideas{" "}
        </p>
        <button className="p-3 bg-[#b13636] text-white rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Holloween;
