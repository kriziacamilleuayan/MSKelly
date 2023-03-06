import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./services.css";

class Services extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Services</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Services;
