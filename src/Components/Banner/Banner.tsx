import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; 

const Banner: React.FC = () => {
  const bannerImages = [
    'https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/01/Studio-Ghibli-Movies.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/12/studio-ghibli-more-free-images-thumbnail.jpg',
    'https://tse2.mm.bing.net/th?id=OIP.rrqCSwEtiKLMzGjNDy0CxwHaEW&pid=Api&P=0&h=220',
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {bannerImages.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Banner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
