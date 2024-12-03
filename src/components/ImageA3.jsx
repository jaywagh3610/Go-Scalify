// const images = [
//   [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image11",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/6362662533112-1727770515.jpg",
//       alt: "image2",
//       name: "image",
//       // className: "w-[300px] h-[300px]",
//     },
//   ],
//   [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image1",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/6362662533112-1727770515.jpg",
//       alt: "image2",
//       name: "image22",
//       className: "w-[300px] h-[300px]",
//     },
//   ],

//   [
//     {
//       src: "public/download (1).jpeg",
//       alt: "image3",
//       name: "image3",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download (2).jpeg",
//       alt: "image4",
//       name: "image4",
//       className: "w-[300px] h-[300px]",
//     },
//   ],
//   [
//     {
//       src: "public/download (3).jpeg",
//       alt: "image3",
//       name: "image33",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download.jpeg",
//       alt: "image4",
//       name: "image44",
//       className: "w-[300px] h-[300px]",
//     },
//   ],
//   [
//     {
//       src: "public/download (1).jpeg",
//       alt: "image3",
//       name: "image13",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download (2).jpeg",
//       alt: "image4",
//       name: "image14",
//       className: "w-[300px] h-[300px]",
//     },
//   ],
//   [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image31",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/6362662533112-1727770515.jpg",
//       alt: "image2",
//       name: "image32",
//       className: "w-[300px] h-[300px]",
//     },
//   ],
//   [
//     {
//       src: "public/download (3).jpeg",
//       alt: "image3",
//       name: "image53",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download.jpeg",
//       alt: "image4",
//       name: "image54",
//       className: "w-[300px] h-[300px]",
//     },
//   ],
//   [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image61",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "img/Holloweenimg/halloween-costumes-e7c84dcf.png",
//       alt: "image2",
//       name: "image62",
//       className: "w-[300px] h-[300px]",
//     },
//   ],
// ];
// import { useEffect, useState } from "react";

// function ImageA1() {
//   const [activeImg] = useState(0);
//   const [activeImg2] = useState(0);
//   const [activeImg3] = useState(0);
//   const [activeImg4] = useState(0);
//   const [activeImg5] = useState(0);
//   const [activeImg6] = useState(0);
//   const [activeImg7] = useState(0);
//   const [inView1, setInView1] = useState(false);
//   const [inView2, setInView2] = useState(false);
//   const [inView3, setInView3] = useState(false);
//   const [inView4, setInView4] = useState(false);
//   const [inView5, setInView5] = useState(false);
//   const [inView6, setInView6] = useState(false);
//   const [inView7, setInView7] = useState(false);

//   const images = [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image1",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/6362662533112-1727770515.jpg",
//       alt: "image2",
//       name: "image2",
//       className: "w-[300px] h-[300px]",
//     },
//   ];

//   const images2 = [
//     {
//       src: "public/download (1).jpeg",
//       alt: "image3",
//       name: "image3",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download (2).jpeg",
//       alt: "image4",
//       name: "image4",
//       className: "w-[300px] h-[300px]",
//     },
//   ];
//   const images3 = [
//     {
//       src: "public/download (3).jpeg",
//       alt: "image3",
//       name: "image3",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download.jpeg",
//       alt: "image4",
//       name: "image4",
//       className: "w-[300px] h-[300px]",
//     },
//   ];
//   const images4 = [
//     {
//       src: "public/download (1).jpeg",
//       alt: "image3",
//       name: "image3",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download (2).jpeg",
//       alt: "image4",
//       name: "image4",
//       className: "w-[300px] h-[300px]",
//     },
//   ];
//   const images5 = [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image1",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/6362662533112-1727770515.jpg",
//       alt: "image2",
//       name: "image2",
//       className: "w-[300px] h-[300px]",
//     },
//   ];
//   const images6 = [
//     {
//       src: "public/download (3).jpeg",
//       alt: "image3",
//       name: "image3",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/download.jpeg",
//       alt: "image4",
//       name: "image4",
//       className: "w-[300px] h-[300px]",
//     },
//   ];
//   const images7 = [
//     {
//       src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
//       alt: "image1",
//       name: "image1",
//       className: "w-[300px] h-[300px]",
//     },
//     {
//       src: "public/6362662533112-1727770515.jpg",
//       alt: "image2",
//       name: "image2",
//       className: "w-[300px] h-[300px]",
//     },
//   ];
//   useEffect(() => {
//     const transitionTime = 1000;
//     const delayBetweenImages = 500;
//     const visibleTime = 4000;

//     const startAnimation = () => {
//       setInView1(true);

//       setTimeout(() => {
//         setInView2(true);
//         setTimeout(() => {
//           setInView3(true);
//           setTimeout(() => {
//             setInView4(true);
//             setTimeout(() => {
//               setInView5(true);
//               setTimeout(() => {
//                 setInView6(true);
//                 setTimeout(() => {
//                   setInView7(true);
//                 }, delayBetweenImages);
//               }, delayBetweenImages);
//             }, delayBetweenImages);
//           }, delayBetweenImages);
//         }, delayBetweenImages);
//       }, delayBetweenImages);
//       setTimeout(() => {
//         setInView1(false);
//         setTimeout(() => {
//           setInView2(false);
//           setTimeout(() => {
//             setInView3(false);
//             setTimeout(() => {
//               setInView4(false);
//               setTimeout(() => {
//                 setInView5(false);
//                 setTimeout(() => {
//                   setInView6(false);
//                   setTimeout(() => {
//                     setInView7(false);
//                   }, delayBetweenImages);
//                 }, delayBetweenImages);
//               }, delayBetweenImages);
//             }, delayBetweenImages);
//           }, delayBetweenImages);
//         }, delayBetweenImages);
//       }, visibleTime);
//     };

//     const interval = setInterval(
//       startAnimation,
//       transitionTime * 2 + visibleTime
//     );
//     startAnimation();
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex relative ">
//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           transition: "all 1s ease",
//           top: "40px",
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index}>
//             <img
//               className={`${image.className} rounded-xl`}
//               src={image.src}
//               alt={image.alt}
//               style={{
//                 position: "absolute",
//                 top: index === activeImg && inView1 ? "50%" : "60%",

//                 width: "100%",
//                 left: 0,
//                 opacity: index === activeImg && inView1 ? 1 : 0,
//                 transition: "top 1s ease, opacity 0.5s ease",
//                 transform:
//                   index === activeImg && inView1
//                     ? "translateY(-50%)"
//                     : "translateY(-90%) ",
//               }}
//             />
//           </div>
//         ))}
//       </div>

//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           marginLeft: "20px",
//           top: "100px",
//           transition: "all 1s ease",
//         }}
//       >
//         {images2.map((image, index) => (
//           <img
//             key={index}
//             className={`${image.className} rounded-xl`}
//             src={image.src}
//             alt={image.alt}
//             style={{
//               position: "absolute",
//               top: index === activeImg2 && inView2 ? "50%" : "60%",
//               width: "100%",
//               left: 0,
//               opacity: index === activeImg2 && inView2 ? 1 : 0,
//               transition: "top 1s ease, opacity 0.5s ease",
//               transform:
//                 activeImg2 === index && inView2
//                   ? "translateY(-50%)"
//                   : "translateY(-90%)",
//             }}
//           />
//         ))}
//       </div>
//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           marginLeft: "20px",
//           top: "150px",
//           transition: "all 1s ease",
//         }}
//       >
//         {images3.map((image, index) => (
//           <img
//             key={index}
//             className={`${image.className} rounded-xl`}
//             src={image.src}
//             alt={image.alt}
//             style={{
//               position: "absolute",
//               top: index === activeImg3 && inView3 ? "50%" : "60%",
//               width: "100%",
//               left: 0,
//               opacity: index === activeImg3 && inView3 ? 1 : 0,
//               transition: "top 1s ease, opacity 0.5s ease ",
//               transform:
//                 activeImg3 === index && inView3
//                   ? "translateY(-50%)"
//                   : "translateY(-90%)",
//             }}
//           />
//         ))}
//       </div>
//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           marginLeft: "20px",
//           top: "250px",
//           transition: "all 1s ease",
//         }}
//       >
//         {images4.map((image, index) => (
//           <img
//             key={index}
//             className={`${image.className} rounded-xl`}
//             src={image.src}
//             alt={image.alt}
//             style={{
//               position: "absolute",
//               top: index === activeImg4 && inView4 ? "50%" : "60%",
//               width: "100%",
//               left: 0,
//               opacity: index === activeImg4 && inView4 ? 1 : 0,
//               transition: "top 1s ease, opacity 0.5s ease ",
//               transform:
//                 activeImg4 === index && inView4
//                   ? "translateY(-50%)"
//                   : "translateY(-90%)",
//             }}
//           />
//         ))}
//       </div>
//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           marginLeft: "20px",
//           top: "150px",
//           transition: "all 1s ease",
//         }}
//       >
//         {images5.map((image, index) => (
//           <img
//             key={index}
//             className={`${image.className} rounded-xl`}
//             src={image.src}
//             alt={image.alt}
//             style={{
//               position: "absolute",
//               top: index === activeImg5 && inView5 ? "50%" : "60%",
//               width: "100%",
//               left: 0,
//               opacity: index === activeImg5 && inView5 ? 1 : 0,
//               transition: "top 1s ease, opacity 0.5s ease ",
//               transform:
//                 activeImg5 === index && inView5
//                   ? "translateY(-50%)"
//                   : "translateY(-90%)",
//             }}
//           />
//         ))}
//       </div>
//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           marginLeft: "20px",
//           top: "100px",
//           transition: "all 1s ease",
//         }}
//       >
//         {images6.map((image, index) => (
//           <img
//             key={index}
//             className={`${image.className} rounded-xl`}
//             src={image.src}
//             alt={image.alt}
//             style={{
//               position: "absolute",
//               top: index === activeImg6 && inView6 ? "50%" : "60%",
//               width: "100%",
//               left: 0,
//               opacity: index === activeImg6 && inView6 ? 1 : 0,
//               transition: "top 1s ease, opacity 0.5s ease ",
//               transform:
//                 activeImg6 === index && inView6
//                   ? "translateY(-50%)"
//                   : "translateY(-90%)",
//             }}
//           />
//         ))}
//       </div>
//       <div
//         className="scroll-container z-[-1]"
//         style={{
//           position: "relative",
//           height: "350px",
//           width: "200px",
//           overflow: "hidden",
//           textAlign: "center",
//           marginLeft: "20px",
//           top: "40px",
//           // left: "-10px",
//           transition: "all 1s ease",
//         }}
//       >
//         {images7.map((image, index) => (
//           <img
//             key={index}
//             className={`${image.className} rounded-xl`}
//             src={image.src}
//             alt={image.alt}
//             style={{
//               position: "absolute",
//               top: index === activeImg7 && inView7 ? "50%" : "60%",
//               width: "100%",
//               left: 0,
//               opacity: index === activeImg7 && inView7 ? 1 : 0,
//               transition: "top 1s ease, opacity 0.5s ease ",
//               transform:
//                 activeImg7 === index && inView7
//                   ? "translateY(-50%)"
//                   : "translateY(-90%)",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ImageA1;
