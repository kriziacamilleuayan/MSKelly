import React from "react";
import "./contact.css";
import { BsGeoAltFill } from "react-icons/bs";

class Contact extends React.Component {
  render() {
    return (
      <>
        <h1 className="title">Offices</h1>
        <div className="container">
          <div className="contact">
            <BsGeoAltFill size={50} color="#d1b034" className="icon" />
            <h2>US Office</h2>
            <p>
              Cloud Employee, 77 New Cavendish St, Marylebone, London W1W 6XB
            </p>
            <p>T: +44 20 3289 6876</p>
            <p>E: info@cloudemployee.co.uk</p>
          </div>
          <div className="contact">
            <BsGeoAltFill size={50} color="#d1b034" className="icon" />
            <h2>US Office</h2>
            <p>
              Cloud Employee, 77 New Cavendish St, Marylebone, London W1W 6XB
            </p>
            <p>T: +44 20 3289 6876</p>
            <p>E: info@cloudemployee.co.uk</p>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
