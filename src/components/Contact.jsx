import React from "react";

function Contact(){
  return(
    <div id="contact"className="section">
      <h1>Contact us</h1>
      <form>
        <input type="text" placeholder="Full Name"  required/>
        <input type="email" placeholder="Type Your Email"  required/>
        <textarea placeholder="Write here....."  required/>
        <input type="submit" value="Send"/>
      </form>
    </div>

  );
}

export default Contact;