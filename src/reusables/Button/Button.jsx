import './Button.css';

function Button({ className, text, onClick, Icon, type, disabled = false }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {text}
      {Icon && Icon}
    </button>
  );
}

export default Button;
