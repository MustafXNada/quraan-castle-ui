import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="section" id="login">
          <div className="login-form">
            <h1>Welcome to Islamic world</h1>
            <p> Sign in to your accout </p>

            <form>
              <input type="email" placeholder="Type Your Email" required />
              <input type="password" placeholder="Type Your password" required />
              <Link to="/register" className="extra-form-link">create new one ? </Link>
              <Link to="/login" className="extra-form-link">forgot password ? </Link>
              <input type="submit" value="Login" />

            </form>
          </div>

      </div>
    </>
  );
}

export default Login;