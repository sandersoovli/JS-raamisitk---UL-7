import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button
      className="button"
      type={props.type || 'button'} // Fallback to 'button' if no type is provided
      onClick={props.onClick}
      //disabled={props.disabled}     // Disabled prop to control button state
    >
      {props.children} {/* Button label/content comes from children prop */}
    </button>
  );
}

export default Button;
