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
        <h2 className="form-header">Contact</h2>
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-group">
          <div className="input-container">
            <label hidden={true} htmlFor="first-name">
              First Name
            </label>
            <input
              className="input contact-input input-first-name"
              type="text"
              name="first-name"
              placeholder="First Name"
            />
          </div>
          <div className="input-container">
            <label hidden={true} htmlFor="last-name">
              Name
            </label>
            <input
              className="input contact-input input-last-name"
              type="text"
              name="last-name"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container">
            <label hidden={true} htmlFor="email">
              Email
            </label>
            <input
              className="input contact-input input-email"
              type="email"
              name="email"
              placeholder="email*"
              required={true}
            />
          </div>
          <div className="input-container">
            <label hidden={true} htmlFor="subject">
              Subject
            </label>
            <input
              className="input contact-input input-subject"
              type="text"
              name="subject"
              placeholder="subject"
            />
          </div>
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
            placeholder="message*"
            required={true}
          ></textarea>
        </div>
        <button className="btn contact-form-btn" type="submit">
          <span>Send</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
