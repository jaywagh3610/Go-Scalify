import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ImageA2({ images }) {
  const [inView, setInView] = useState({
    inView1: false,
    inView2: false,
    inView3: false,
    inView4: false,
    inView5: false,
    inView6: false,
    inView7: false,
  });
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    const delayBetweenImages = 500;
    const visibleTime = 800;
    const hideDelay = 200;
    const totalImages = Object.keys(inView).length;
    const showImages = () => {
      Object.keys(inView).forEach((key, index) => {
        setTimeout(() => {
          setInView((prev) => ({
            ...prev,
            [key]: true,
          }));
        }, delayBetweenImages * index);
      });
    };

    const hideImages = () => {
      Object.keys(inView).forEach((key, index) => {
        setTimeout(() => {
          setInView((prev) => ({
            ...prev,
            [key]: false,
          }));
        }, hideDelay * index);
      });
    };

    const loopImages = () => {
      showImages();
      setTimeout(() => {
        hideImages();
      }, delayBetweenImages * totalImages + visibleTime);
      setTimeout(() => {
        setCurr((prev) => (prev === 0 ? 1 : 0));
      }, delayBetweenImages * totalImages + visibleTime + hideDelay * totalImages);
    };
    console.log(curr);
    const intervalId = setInterval(
      loopImages,
      delayBetweenImages * totalImages + visibleTime + hideDelay * totalImages
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex relative left-[14px] top-[7.75rem] ">
      {images?.map((img, Aindex) => {
        return (
          <div key={Aindex} className="h-[17rem]">
            <div
              className={`  h-[17rem] z-[-1] parent`}
              style={{
                top:
                  Aindex >= 4 ? `${(6 - Aindex) * 80}px` : ` ${Aindex * 80}px`,
                left: `${Aindex * 15}px`,
                opacity: inView[`inView${Aindex + 1}`] ? 1 : 0,
                transform: inView[`inView${Aindex + 1}`]
                  ? "translateY(-40%)"
                  : "translateY(-80%)",
                transition: inView[`inView${Aindex + 1}`]
                  ? ""
                  : "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              {img?.map((i, index) => (
                <div key={index} className="h-[25rem] reative top-[5rem]">
                  <img
                    src={i.src}
                    alt={i.alt}
                    className={`${i.className}  rounded-xl child`}
                    style={{
                      top:
                        curr === index && inView[`inView${Aindex + 1}`]
                          ? "15%"
                          : "90%",
                      transition: "top 1.5s ease",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
ImageA2.propTypes = {
  images: PropTypes.array,
};
export default ImageA2;
