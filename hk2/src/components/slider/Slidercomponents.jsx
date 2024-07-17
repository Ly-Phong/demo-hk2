import React from 'react';
import SlickSlider from 'react-slick';
import { Image } from 'antd';
import'./style.css'

const Slidercomponents = ({ images  }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // Cho phép chiều cao tự động thích ứng với nội dung của slide
    responsive: [
      {
        breakpoint: 1440, // Điều chỉnh khi kích thước màn hình nhỏ hơn 1440px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <SlickSlider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="slider-image">
          <Image src={img} alt={`Slider ${index}`} preview={false}/>
        </div>
      ))}
    </SlickSlider>
  );
};

export default Slidercomponents;
