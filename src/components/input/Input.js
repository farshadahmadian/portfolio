import { Placeholder } from "react-bootstrap";

const Input = ({ className, type, name, placeHolder }) => {
  return (
    <div className="input-container">
      <label hidden={true} htmlFor={name}>
        First Name
      </label>
      <input
        className={`input contact-input ${className}`}
        type={type}
        name={name}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Input;
