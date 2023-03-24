import './Button.css';

function Button({ className, text, onClick, Icon }) {
  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      {text}
      {Icon && Icon}
    </button>
  );
}

export default Button;
