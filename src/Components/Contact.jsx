import React, { Component } from "react";
import "./Contact.css";
import vaultBoy from "../Assets/5d363c53d3d80.png";
import vaultBoy2 from "../Assets/output-onlinepngtools.png";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends Component {
  state = { name: "", email: "", message: "" };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <>
        <div className="contact-container" id="contact">
          <div className="img-container">
            <img className="vault" src={vaultBoy2} alt="" />
          </div>

          <div className="contact-form">
            <div className="form">
              <form
                name="contact"
                method="POST"
                onSubmit={this.handleSubmit}
                data-netlify-honeypot="bot-field"
                data-netlify="true"
              >
                {/* <input type="hidden" name="form-name" value="contact" /> */}
                <p className="form-stuff">
                  <label>
                    Your Name
                    <input
                      type="name"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      className="input-sizing"
                    />
                  </label>
                </p>
                <p className="form-stuff">
                  <label>
                    Your Email
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      className="input-sizing"
                    />
                  </label>
                </p>
                <p className="form-stuff">
                  <label>
                    Message
                    <textarea
                      name="message"
                      value={message}
                      onChange={this.handleChange}
                      className="input-sizing"
                      rows="10"
                    />
                  </label>
                </p>
                <p className="btn-stuff">
                  <button className="submit" type="submit">
                    Send
                  </button>
                </p>
              </form>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Contact;
