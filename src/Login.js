import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault(); //this stops refresh
    //do login logic

    auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //Logged in
            history.push('/');
        })
        .catch(e => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault(); //this stops refresh

    //do register logic
    auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/');
        })
        .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://images.vexels.com/media/users/3/153149/isolated/preview/1dbe90ba2f24289a1668a0dbc8150e2e-gamepad-colored-stroke-icon-by-vexels.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button type="submit" onClick={login} className="login__signinbutton">
            Sign In
          </button>
          <button
            type="submit"
            onClick={register}
            className="login__registerbutton"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
