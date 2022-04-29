import { useState } from "react";
import classes from "./Auth.module.css";
import { Link, Outlet } from "react-router-dom";

const Auth = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleHasAccount = () => {
    setHasAccount((state) => !state);
  };

  const loginHandler = (e) => {
      e.preventDefault();
  }

  return (
    <div className={classes.Auth}>
      <div className={classes.Auth__pOne}>
        {hasAccount ? <p>Log in!</p> : <p>Sign up!</p>}
      </div>
      <form className={classes.Auth__form}>
        {!hasAccount && (
          <fieldset className={classes.Auth__formGroup}>
              <legend>
                  Username
              </legend>
              <input
              id="username"
            className={classes.Auth__inputOne}
            type="text"
            placeholder="Enter Username"
            onChange={(e)=>setUsername(e.target.value)}
            required
          />
          </fieldset>
        )}
        <fieldset className={classes.Auth__formGroup}>
          <legend>
            Email Address
          </legend>
          <input
            className={classes.Auth__inputOne}
            id="email"
            type="text"
            placeholder="Enter Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className={classes.Auth__formGroup}>
          <legend>
            Password
          </legend>
          <input
            className={classes.Auth__inputOne}
            id="password"
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </fieldset>

        <div className={classes.Auth__inputTwo}>
            <label className={classes.Auth__labelCheckbox}>
              <input className={classes.Auth__inputCheckbox} type="checkbox" />
              &nbsp;Remember me
            </label>
          <p className={classes.Auth__pTwo}>Forgot Password?</p>
        </div>
        <button onClick={loginHandler}>
          <Link to="/tasksboard" className={classes.link}>
              Log in
          </Link>
        </button>
      </form>
      <div className={classes.Auth__pThree} onClick={toggleHasAccount}>
        {hasAccount ? (
          <p>Don&apos;t have an account?</p>
        ) : (
          <p>Already have an account?</p>
        )}
      </div>
      <Outlet/>
    </div>
  );
};

export default Auth;
