import "./Logo.css";

const Logo = () => {
  const clickHandler = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="logo-container" onClick={clickHandler}>
        <img className="logo" src="./farshad.png" alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
