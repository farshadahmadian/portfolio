import "./Logo.css";

const Logo = () => {
  const clickHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="logo-container" onClick={clickHandler}></div>
    </>
  );
};

export default Logo;
