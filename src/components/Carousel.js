import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div><img src="../img/dog1.jpg" alt="dog1" /></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
