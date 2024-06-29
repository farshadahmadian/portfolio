import Input from "../input/Input";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div id="contact" className="form-container">
      <form
        className="form-contact"
        method="post"
        name="contact"
        netlify="true"
        action="/response.html"
        autoComplete="on"
      >
        <div className="form-header-container">
          <h2 className="form-header">Contact</h2>
          <p>
            While you're here, why not drop me a line? I'd love to hear from
            you! 😉
          </p>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-group">
          <Input
            className="input-first-name"
            type="text"
            name="first-name"
            placeHolder="First Name"
          />
          <Input
            className="input-last-name"
            type="text"
            name="last-name"
            placeHolder="Last Name"
          />
        </div>
        <div className="input-group">
          <Input
            className="input-email"
            type="email"
            name="email"
            placeHolder="Email*"
          />
          <Input
            className="input-subject"
            type="text"
            name="subject"
            placeHolder="Subject"
          />
        </div>
        <div className="input-container">
          <label hidden={true} htmlFor="message">
            Message
          </label>
          <textarea
            className="input contact-input text-area-message"
            name="message"
            rows={5}
            spellCheck={true}
            placeholder="Message*"
            required={true}
          ></textarea>
        </div>
        <button className="btn contact-form-btn" type="submit">
          <span>Send</span>
          {/* <div className="icon-send-container"> */}
          <img className="icon icon-send" src="./send3.png" alt="Send" />
          {/* </div> */}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
