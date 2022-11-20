import React from 'react';

const Rating = ({ value, text, color }) => {
  return (
    <div style={{
      "fontSize": "15px",
      "fontWeight": "700",
      "justifyContent": "center",
      "borderRadius": "2px",
      "padding": "0 0 0 4px",
      "backgroundColor": "hsla(0,0%,100%,.9)",
      "alignItems": "center",
      "display": "flex"
    }}>
      <span>
        <i
          style={{ color: '#f5e942' }}
          className={'fas fa-star'}
        ></i>
      </span>
      <span>&nbsp;{value}&nbsp;|&nbsp;{text}&nbsp;</span>
    </div >
  );
};

Rating.defaultProps = {
  color: '#111111',
};

export default Rating;
