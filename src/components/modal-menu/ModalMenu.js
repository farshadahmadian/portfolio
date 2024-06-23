import "./ModalMenu.css";

const ModalMenu = ({ onCloseModal }) => {
  return (
    <div className="modal-menu-container">
      <p>About Me</p>
      <p>Projects</p>
      <button onClick={onCloseModal} className="close-btn">
        <img className="close-btn" src="./close.png" alt="Close Button" />
      </button>
    </div>
  );
};

export default ModalMenu;
