import React from "react";

const Imginfo = () => {
  const Imgthre = [
    {
      img: "./public/tainguyen/7-9.jpg",
    },
    {
      img: "./public/tainguyen/4-3.jpg",
    },
    {
      img: "./public/tainguyen/3-6.jpg",
    },
  ];
  return (
    <div className="hangbot">
      {Imgthre.map((item, index) => (
        <div key={index} className="product-item">
          <img src={item.img} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Imginfo;
