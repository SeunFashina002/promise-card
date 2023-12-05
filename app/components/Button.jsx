const Button = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-5 md:py-4 rounded-full `}
    >
      {label}
    </button>
  );
};

export default Button
