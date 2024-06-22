import Navbar from "../navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
      <h1 className="header-text">Welcome</h1>
    </header>
  );
};

export default Header;
