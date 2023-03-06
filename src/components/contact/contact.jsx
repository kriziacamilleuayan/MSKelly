import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Contact</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Contact;
