import { useState } from "react";

function Nav() {
  const [displayFull, setDisplayFull] = useState(false);
  function handleNavDisplay() {
    setDisplayFull((show) => !show);
  }
  return (
    <div className="lg:flex ml-4">
      <div>
        <button
          onClick={handleNavDisplay}
          className={`flex justify-center font-medium p-3 rounded-3xl ${
            displayFull ? "bg-black text-white" : ""
          }`}
        >
          Home{" "}
          <span className="material-symbols-outlined">keyboard_arrow_down</span>
        </button>
      </div>
      {displayFull && (
        <div
          className={`absolute left-[30px] dropdown top-[65px] leading-8 rounded-2xl  w-[180px]  flex flex-col justify-center  p-2 font-medium `}
        >
          <h1 className="bg-slate-300 rounded-xl p-1">Home</h1>
          <h1>Explore</h1>
          <h1>Create</h1>
        </div>
      )}
    </div>
  );
}

export default Nav;
