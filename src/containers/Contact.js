import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailOk, setEmailOk] = useState(false);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  const checkEmail = mail => {
    var reg = new RegExp(
      "^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$",
      "i"
    );
    if (!reg.test(email)) {
      setEmailOk(false);
    } else {
      setEmailOk(true);
    }
  };

  return (
    <section className="background-modeles wrapper">
      <div className="left-side mg-top">
        <div className="icon-div mg-top">
          <img
            src={process.env.PUBLIC_URL + "/images/mail.png"}
            alt="icon-cat"
            className="icon-categorie"
          />
        </div>
        <div className="left-side-container">
          <h2>Contactez nous</h2>
          <h4>Nous serions ravis d'échanger avec vous !</h4>
        </div>
      </div>
      <section className="contact">
        <div className="background-card mg-top">
          <form className="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label className="label">Nom</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="label">Prenom</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="label">Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  checkEmail(e.target.value);
                }}
                onBlur={checkEmail}
              />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={text}
                onChange={e => {
                  setText(e.target.value);
                }}
              />
            </div>
            <div className="button-div">
              <button
                type="submit"
                className="btn"
                disabled={
                  name === "" ||
                  lastName === "" ||
                  email === "" ||
                  !emailOk ||
                  text === ""
                }
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
