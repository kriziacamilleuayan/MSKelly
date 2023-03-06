import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./about.css";

class Faq extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>About</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Faq;
