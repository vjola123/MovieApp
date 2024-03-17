import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; 

const Banner: React.FC = () => {
  const bannerImages = [
    'https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/01/Studio-Ghibli-Movies.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/12/studio-ghibli-more-free-images-thumbnail.jpg',
    'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vbWVkaWEucmJsLm1zL2ltYWdlP3U9JTJGZmlsZXMlMkYyMDE1JTJGMTElMkYxNCUyRjYzNTgzMDY4OTI1MjQ0NDA2Ny02MDk5NDkxNjdfU3R1ZGlvJTI1MjBHaGlibGkuanBnJmhvPWh0dHAlM0ElMkYlMkZjZG4xLnRoZW9keXNzZXlvbmxpbmUuY29tJnM9MzA1Jmg9YTg4YmMzNjRhNzU2YzkwODNhMmEyMzlkZWU0MWE2NzQ3ODNlOGY0NDc1ZDBiNTA0NTVhODhlNjhlZTQ3N2MyZiZzaXplPTk4MHgmYz0zNTI1MzQ5ODAyIiwiZXhwaXJlc19hdCI6MTY2NTQxNzE1N30.6sxdGOcyjisNn6-bdfCawOZGcRyo8Gjm9VhaMI6_N6s/img.jpg?width=1200&height=628',
   
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
