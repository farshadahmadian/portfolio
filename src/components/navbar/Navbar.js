import Links from "../Links/Links";
import HamburgerButton from "../hamburger-button/HamburgerButton";
import ToggleTheme from "../toggle-theme/ToggleTheme"
import Logo from "../logo/Logo";
import "./Navbar.css";

const Navbar = ({ onToggleMenu, isMenuOpen }) => {
  return (
    <nav className="navbar-container">
      <Logo />
			<div className="links-container">
      <Links />
			<ToggleTheme />
      <HamburgerButton onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
			</div>
    </nav>
  );
};

export default Navbar;
