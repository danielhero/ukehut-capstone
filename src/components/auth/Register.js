import React, { useRef, useState } from "react";
import "./Login.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const verifyPassword = useRef();

  const existingUserCheck = () => {
    return fetch(
      `http://localhost:8088/users?username=${username.current.value}`
    )
      .then((_) => _.json())
      .then((user) => {
        if (user.length) {
          return true;
        }
        return false;
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            username: username.current.value,
            password: password.current.value,
            name: `${firstName.current.value} ${lastName.current.value}`,
          }),
        })
          .then((_) => _.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("ukehut_user", createdUser.id);
              props.toggle();
            }
          });
      });
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <>
      <main className="container--login">
        <form className="form--register" onSubmit={handleRegister}>
          <h4 className="darkgray">
            If you are not a UKEHUT user, please register a new account
          </h4>
          <fieldset>
            <label htmlFor="firstName"> First Name </label>
            <input
              ref={firstName}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Last Name </label>
            <input
              ref={lastName}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="lastName"> Username </label>
            <input
              ref={username}
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="verifyPassword"> Verify Password </label>
            <input
              ref={verifyPassword}
              type="password"
              name="verifyPassword"
              className="form-control"
              placeholder="Verify password"
              required
            />
          </fieldset>
          <fieldset>
            <button type="submit">Sign in</button>
          </fieldset>
        </form>
      </main>
    </>
  );
};

export default Register;
