const Button = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-3 md:py-3 rounded-full `}
    >
      {label}
    </button>
  );
};

export default Button;
