import React, { useRef, useState } from "react";
import "./Login.css";
import { Button } from "reactstrap";
import Register from "./Register";

const Login = (props) => {
  const username = useRef();
  const password = useRef();

  const [register, setRegister] = useState(false);
  const toggleRegister = () => setRegister(!register);

  const existingUserCheck = () => {
    return fetch(
      `http://localhost:8088/users?username=${username.current.value}`
    )
      .then((_) => _.json())
      .then((user) => {
        if (user.length) {
          return user[0];
        }
        return false;
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("ukehut_user", exists.id);
        props.toggle();
      } else if (exists && exists.password !== password.current.value) {
        window.alert("Password does not match");
      } else if (!exists) {
        window.alert("User account does not exist");
      }
    });
  };

  return (
    <main className="container--login">
      <form className="form--login" onSubmit={handleLogin}>
        <h2>SIGN IN</h2>
        <fieldset>
          <label htmlFor="inputUsername"> USERNAME </label>
          <input
            ref={username}
            type="text"
            id="username"
            className="form-control"
            placeholder="Username"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> PASSWORD </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <button type="submit">Sign in</button>
        </fieldset>
      </form>
      <section>
        <Button>Register Here</Button>
      </section>
    </main>
  );
};

export default Login;
