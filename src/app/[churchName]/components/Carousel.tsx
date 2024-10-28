"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


const data = [
    {
        id:1,
        img: "/carousel/1.jpg",
    },
    {
        id:1,
        img: "/carousel/2.png",
    }
]

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="lg:max-w-[80%] w-[90%] ">
      <Slider {...settings}>
    {data.map(item => <img src={item.img} key={item.id} className="w-ful" />)}
      </Slider>
    </div>
  );
}

export default Carousel;
