
import React from 'react';
import bcss from '../button/button.module.css'
const Button = ({ onLoadMore }) => {
    return (
      <div className={bcss.boxik}>
            <button className={bcss.button} onClick={onLoadMore}>Load More</button>
            </div>
  );
};

export default Button;