import ImageA2 from "../components/ImageA2";

function Images() {
  const images = [
    [
      {
        src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
        alt: "image1",
        name: "image11",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/6362662533112-1727770515.jpg",
        alt: "image2",
        name: "image",
        className: "w-[390px] h-[250px]",
      },
    ],
    [
      {
        src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
        alt: "image1",
        name: "image1",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/6362662533112-1727770515.jpg",
        alt: "image2",
        name: "image22",
        className: "w-[390px] h-[250px]",
      },
    ],

    [
      {
        src: "public/download (1).jpeg",
        alt: "image3",
        name: "image3",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/download (2).jpeg",
        alt: "image4",
        name: "image4",
        className: "w-[390px] h-[250px]",
      },
    ],
    [
      {
        src: "public/download (3).jpeg",
        alt: "image3",
        name: "image33",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/download.jpeg",
        alt: "image4",
        name: "image44",
        className: "w-[390px] h-[250px]",
      },
    ],
    [
      {
        src: "public/download (1).jpeg",
        alt: "image3",
        name: "image13",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/download (2).jpeg",
        alt: "image4",
        name: "image14",
        className: "w-[390px] h-[250px]",
      },
    ],
    [
      {
        src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
        alt: "image1",
        name: "image31",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/6362662533112-1727770515.jpg",
        alt: "image2",
        name: "image32",
        className: "w-[390px] h-[250px]",
      },
    ],
    [
      {
        src: "public/download (3).jpeg",
        alt: "image3",
        name: "image53",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "public/download.jpeg",
        alt: "image4",
        name: "image54",
        className: "w-[390px] h-[250px]",
      },
    ],
    [
      {
        src: "public/81H02rw7+YL._AC_UF1000,1000_QL80_.jpg",
        alt: "image1",
        name: "image61",
        className: "w-[390px] h-[250px]",
      },
      {
        src: "img/Holloweenimg/halloween-costumes-e7c84dcf.png",
        alt: "image2",
        name: "image62",
        className: "w-[390px] h-[250px]",
      },
    ],
  ];

  return (
    <div>
      {images ? <ImageA2 images={images} /> : <div>Loading images...</div>}
    </div>
  );
}

export default Images;
