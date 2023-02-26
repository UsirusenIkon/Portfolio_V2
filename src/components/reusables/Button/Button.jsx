import './Button.css';

function Button({ className, text, onClick }) {
  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
