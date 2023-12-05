const Container = ({ children, className }) => {
  return <div className={`px-6 lg:px-9 ${className}`}>{children}</div>;
};

export default Container;
