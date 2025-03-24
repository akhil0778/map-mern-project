import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

class Carousel extends Component {
  renderCarousel = () => {
    const settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    const offersList = [
      { id: 1, imageUrl: "/assets/image1.jpg" },
      { id: 2, imageUrl: "/assets/image2.jpg" },
      { id: 3, imageUrl: "/assets/image3.jpg" },
    ];

    return (
      <div className="carousel-container">
        <Slider {...settings} className="carousel">
          {offersList.map((eachImage) => (
            <div key={eachImage.id}>
              <img
                src={eachImage.imageUrl}
                alt="offer"
                className="carousel-item-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  render() {
    return this.renderCarousel();
  }
}

export default Carousel;
