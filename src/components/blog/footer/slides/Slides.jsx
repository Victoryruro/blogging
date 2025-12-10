import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from './Sdata';
import './style.css'

const Slides = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  
  return (
    <div className='slide'>
        <h2>Categories</h2>
        <Slider {...settings}>
            {
                Sdata.map((value)=>{
                    return(
                        <div className='box'>
                            <div className="image">
                                <img src={value.cover} alt="image"  height={''} />
                            </div>
                            <div className="text">
                                <span>{value.category}</span>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    )
                })
            }

           
        </Slider>
    </div>
  )
}

export default Slides