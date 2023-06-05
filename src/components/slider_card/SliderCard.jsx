import React, { useState } from "react";
import Slider from "react-slick";

import "./slick.css";
import "./first-slider.css";
import "./second-slider.css";

const SliderCard = ({ foto }) => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <div className="wrapper">
      <Slider
        asNavFor={slider2}
        ref={(slider) => setSlider1(slider)}
        className="first_slider"
        fade={true}
      >
        <div>
          <img
            className="mainImage"
            src="https://www.pompa.ru/upload/resize_cache/webp/iblock/fe1/nlowclw7hijj0abvwiqbxijet463yuzk/2000_2000_0/4118961sw0641_i1.webp"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://www.pompa.ru/upload/resize_cache/webp/iblock/024/b0jgw64y32yktb35u7fc5notgj8n4vfl/2000_2000_0/3118851up0105_i2.webp"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://cdn.finnflare.com/upload/resize_cache/full_size/FBC/101/800_1200_2/FBC110108_101_20.jpg?cdn=1649411454"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://www.pompa.ru/upload/resize_cache/webp/iblock/024/b0jgw64y32yktb35u7fc5notgj8n4vfl/2000_2000_0/3118851up0105_i2.webp"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://cdn.finnflare.com/upload/resize_cache/full_size/FBC/101/800_1200_2/FBC110108_101_20.jpg?cdn=1649411454"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34LdJCeZZVp6mR5GQv6H4RRuvTkUDL5a5TXgcWHpTmBH6WsQglgulHxPU5aRc76tL3kQ&usqp=CAU"
            alt="foto"
          />
        </div>
      </Slider>

      <Slider
        asNavFor={slider1}
        ref={(slider) => setSlider2(slider)}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        className="second_slider"
        vertical={true}
        centerPadding="0"
        arrows={false}
      >
        <div>
          <img
            className="mainImage"
            src="https://www.pompa.ru/upload/resize_cache/webp/iblock/fe1/nlowclw7hijj0abvwiqbxijet463yuzk/2000_2000_0/4118961sw0641_i1.webp"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://www.pompa.ru/upload/resize_cache/webp/iblock/024/b0jgw64y32yktb35u7fc5notgj8n4vfl/2000_2000_0/3118851up0105_i2.webp"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://cdn.finnflare.com/upload/resize_cache/full_size/FBC/101/800_1200_2/FBC110108_101_20.jpg?cdn=1649411454"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://www.pompa.ru/upload/resize_cache/webp/iblock/024/b0jgw64y32yktb35u7fc5notgj8n4vfl/2000_2000_0/3118851up0105_i2.webp"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://cdn.finnflare.com/upload/resize_cache/full_size/FBC/101/800_1200_2/FBC110108_101_20.jpg?cdn=1649411454"
            alt="foto"
          />
        </div>
        <div>
          <img
            className="mainImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34LdJCeZZVp6mR5GQv6H4RRuvTkUDL5a5TXgcWHpTmBH6WsQglgulHxPU5aRc76tL3kQ&usqp=CAU"
            alt="foto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCard;
