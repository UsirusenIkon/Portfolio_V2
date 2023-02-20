import './Button.css';
import PropTypes from 'react';

function Button({ className, text }) {
  return (
    <button type="button" className={`btn ${className}`}>
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
