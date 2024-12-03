import { useState, useEffect } from "react";
import ImagesAnimation from "./ImagesAnimation";

function Top() {
  const [activeText, setActiveText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const [activeDot, setActiveDot] = useState(0);

  const textItems = [
    { text: "chai time snacks idea", color: "#ddbd19e5" },
    { text: "home décor idea", color: "#1a4feee5" },
    { text: "outfit idea", color: "#3f7a56e5" },
    { text: "DIY idea", color: "#106c8be5" },
  ];
  const dot = [
    { dot: ".", name: "dot1", color: "#ddbd19e5" },
    { dot: ".", name: "dot2", color: "#1a4feee5" },
    { dot: ".", name: "dot3", color: "#3f7a56e5" },
    { dot: ".", name: "dot4", color: "#106c8be5" },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
      setTimeout(() => {
        setActiveDot((prev) => (prev + 1) % dot.length);
        setTimeout(() => {
          setIsVisible(true);

          setActiveText((prev) => (prev + 1) % textItems.length);
        }, 1000);
      }, 100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-[728px] ">
      <div className="flex flex-col  items-center justify-center mt-[55px]">
        <h1 className="text-6xl font-semibold">Get your next</h1>
        <div
          className="scroll-container"
          style={{
            position: "relative",
            height: "100px",
            width: "100%",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {textItems.map((item, index) => {
            const isActive = isVisible && activeText === index;
            const isOutOfView = !isVisible && activeText !== index;

            return (
              <h1
                key={index}
                className="text-6xl font-semibold "
                style={{
                  position: "absolute",
                  top: isActive ? "10%" : "-100%",
                  width: "100%",
                  left: 0,
                  opacity: isActive ? 1 : 0,
                  color: item.color,
                  transform: isOutOfView ? "translateY(360%)" : "translateY(0)",
                  transition:
                    "top 1s ease, opacity 0.5s ease, transform 1s ease",
                }}
              >
                {item.text}
              </h1>
            );
          })}
        </div>
        <div className="flex text-7xl text-slate-400 relative top-[-70px]">
          {dot.map((d, index) => (
            <div key={index}>
              <h1 style={{ color: activeDot === index && d.color }}>{d.dot}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-0">{<ImagesAnimation />}</div>

      <div className="h-[150px] relative top-[-27px] blur-3xl bg-slate-50"></div>
      <div className="flex justify-center animate-bounce relative top-[-4.5rem]">
        <span className="bg-[#065236] w-11 h-11 rounded-full flex justify-center items-center">
          <span className="material-symbols-outlined">keyboard_arrow_down</span>{" "}
        </span>
      </div>
      <div className="text-center bg-[#c7dc29] p-3 relative top-[-4.4rem]">
        <p className="flex items-center justify-center font-medium">
          Here&apos;s how it works{" "}
          <span className="material-symbols-outlined">keyboard_arrow_down</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Top;
