import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css"



export default class Responsive extends Component {
    render() {
        let settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },

            ]
        };
        return (
            <div className="container mt-5 mb-5">
                <style>{cssstyle}</style>
                <Slider {...settings}>
                    <div className='round-slider'>
                        <a href="#"><img className="img-slider" src="./img/car/tree.png" alt="лечение зубов"/>
                            <p className="text-center main-text">Лечение зубов</p></a>
                    </div>
                    <div className='round-slider'>
                        <a href="#"><img className="img-slider-two" src="./img/car/solodka.png" alt="лечение зубов"/><p className="text-center main-text">Лечение зубов</p></a>
                    </div>
                    <div className='round-slider'>
                        <a href="#"><img className="img-slider-three" src="./img/car/amarant.png" alt="лечение зубов"/><p className="text-center main-text main-text-three">Волосы</p></a>
                    </div>
                    <div className='round-slider'>
                        <a href="#"><img className="img-slider-four" src="./img/car/flower.png" alt=""/><p className="text-center main-text">Желудок</p></a>
                    </div>
                    <div className='round-slider'>
                        <a href="#"><img src="" alt=""/></a>
                    </div>
                    <div className='round-slider'>
                        <a href="#"></a>
                    </div >
                    <div className='round-slider'>
                        <a href="#"></a>
                    </div>
                    <div className='round-slider'>
                        <a href="#"></a>

                    </div>
                </Slider>
            </div>
        );
    }
}

const cssstyle = `
.container {
  margin: 10 auto;
  width: 75%;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
`