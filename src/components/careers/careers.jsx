import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./careers.css";

class Careers extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>Careers</h1>
        </div>
        <Footer />
      </>
    );
  }
}

export default Careers;
