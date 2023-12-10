const Button = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-2 md:py-2 rounded-full `}
    >
      {label}
    </button>
  );
};

export default Button;
