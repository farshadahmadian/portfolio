import Navbar from "../navbar/Navbar";
import Modal from "../modal/Modal";
import "./Header.css";
import ModalMenu from "../modal-menu/ModalMenu";

const Header = ({ onToggleMenu, isMenuOpen, onCloseModal }) => {
  return (
    <>
      <header
        className={`${
          !isMenuOpen ? "header-container" : "header-container-blur"
        }`}
      >
        <Navbar onToggleMenu={onToggleMenu} isMenuOpen={isMenuOpen} />
        <h1 className="header-text">Welcome</h1>
      </header>
      {isMenuOpen && (
        <Modal>
          <ModalMenu onCloseModal={onCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
