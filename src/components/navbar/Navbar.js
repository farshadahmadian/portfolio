import Links from "../Links/Links";
import Logo from "../logo/Logo";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import ToggleTheme from "../toggle-theme/ToggleTheme";
import "./Navbar.css";

const Navbar = ({ onToggleMenu, isMenuOpen, isDark, onToggleTheme }) => {
  return (
    <nav className={!isMenuOpen ? "navbar-container" : "hidden"}>
      <Logo />
      <div className="links-container">
        <Links />
        <ToggleTheme isDark={isDark} onToggleTheme={onToggleTheme} />
        <HamburgerButton onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
