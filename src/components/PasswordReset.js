import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <>
      <h1>
        Changer de mot de passe
      </h1>
        <form onSubmit={sendResetEmail}>
          {emailHasBeenSent && (
            <span>
              Un email à été envoyé
            </span>
          )}
          {error !== null && (
            <p>
              {error}
            </p>
          )}
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="Input your email"
            onChange={onChangeHandler}
          />
          <button type="submit">
            Envoyer un lien par email
          </button>
        </form>
        <Link to="/signin">
          Retour à la page de connexion
        </Link>
    </>
  );
};
export default PasswordReset;