const Form = () => {
  return (
    <div className="form-section grid grid-cols-2">
      <div className="form-img-box"></div>

      <form id="general-form">
        <h2 className="center heading-secondary">Contact us</h2>

        <div>
          <div>
            <label htmlFor="class-name">Full name</label>
            <input
              id="class-name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="email@address.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              type="textarea"
              rows="3"
              cols="33"
              placeholder="Please enter your message."
              required
            ></textarea>
          </div>
        </div>

        <button id="form-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
