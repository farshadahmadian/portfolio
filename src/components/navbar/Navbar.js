import Links from "../Links/Links";
import Logo from "../logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Logo />
      <Links />
    </nav>
  );
};

export default Navbar;
