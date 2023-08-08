import React from "react";
import { Link } from "react-router-dom";
function Register(){
  return(
    <>
      <div className="page" id="login">
        <div className="display-flex">
          <div className="login-form">
            <h1>Welcome to Islamic world</h1>
            <p> Sign in to your accout </p>

            <form>
              
            <input type="text" placeholder="Type Your Full Name" required />
              <input type="email" placeholder="Type Your Email" required />
              <input type="password" placeholder="Type Your password" required />
              <input type="password" placeholder="Confirm Password" required />
              <input type="text" placeholder="Type Your Phone" required />

              <input type="submit" value="Register" />

            </form>
          </div>
          <div className="bg-banner">
            <div>
              <h2> STEP UP YOUR</h2>
              <h1><span>Fitness </span>With Us</h1>
              <p className="details">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              <div className="header-btn">
                <a href="/" className="header-btn">Trial Session</a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Register;