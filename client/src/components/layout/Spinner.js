import React from 'react';
import { ThreeCircles } from 'react-loader-spinner'


const Spinner = () => (
  <div style={{
    display: "flex",
    height: '50%',
    placeContent: "center"
  }} >
    <ThreeCircles
      height="100"
      width="100"
      color="white"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </div>
);

export default Spinner;
