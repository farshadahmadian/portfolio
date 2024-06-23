import "./HamburgerButton.css";

const HamburgerButton = ({ onToggleMenu, isMenuOpen }) => {
  return (
    !isMenuOpen && (
      <button onClick={onToggleMenu} className="hamburger-btn-container">
        <img
          className="btn hamburger-btn"
          src="./hamburger-button5.png"
          alt="Hamburger Button"
        />
      </button>
    )
  );
};

export default HamburgerButton;
