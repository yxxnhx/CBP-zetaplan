import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const InfoSwiperItem = ({item}) => {

  return (
    <>
      <p className='infoConTitle'>
        {item.title}
      </p>
      <p className='infoConDate'>
        {item.createdAt}
      </p>
    </>
  );
};

export default InfoSwiperItem;