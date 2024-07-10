import "./HamburgerButton.css";

const HamburgerButton = ({ onToggleMenu, isMenuOpen }) => {
  return (
    !isMenuOpen && (
      <button onClick={onToggleMenu} className="hamburger-btn-container">
        <img
          className="btn hamburger-btn"
          src="./hamburger-button.png"
          alt="Hamburger Button"
        />
      </button>
    )
  );
};

export default HamburgerButton;
