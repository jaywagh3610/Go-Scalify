import { FaRegMessage } from "react-icons/fa6";
import Nav from "../components/Nav";
import ImageCard from "../utils/ImageCard";

function Pinterest() {
  const images = [
    {
      src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
      name: "image Here1",
    },
    {
      src: "public/6362662533112-1727770515.jpg",
      name: "image Here2",
    },
    {
      src: "public/download (1).jpeg",
      name: "image Here3",
    },
    {
      src: "public/download (3).jpeg",
      name: "image Here4",
    },
    {
      src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
      name: "image Here5",
    },
    {
      src: "public/download.jpeg",
      name: "image Here6",
    },
    {
      src: "public/istockphoto-517188688-612x612.jpg",
      name: "image Here7",
    },
    {
      src: "public/download.jpeg",
      name: "image Here8",
    },
    {
      src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
      name: "image Here9",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center gap-3 mt-3 ml-6">
        <img
          src="/Pinterest-logo.png"
          className="w-7 h-7 md:block"
          alt="Pinterest Logo"
        />
        <Nav />
        <input
          type="text"
          className="p-3 w-[400px] rounded-3xl outline-none bg-[#4f4b4b11]"
          placeholder="🔍 Search"
        />
        <span className="material-symbols-outlined text-slate-300 text-3xl">
          notifications
        </span>
        <FaRegMessage className=" text-slate-300 text-2xl ml-1" />
        <span className="border bg-slate-200 rounded-full w-5 flex justify-center text-[#221e22ea] text-sm ml-2">
          J
        </span>
        <span className="material-symbols-outlined ml-1">
          keyboard_arrow_down
        </span>
      </div>

      <div className="masonry-container mt-2">
        {images.map((img) => (
          <ImageCard key={img.name} img={img.src} />
        ))}
      </div>
    </div>
  );
}

export default Pinterest;
