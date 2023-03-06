import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./faq.css";

class About extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>FAQ</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
