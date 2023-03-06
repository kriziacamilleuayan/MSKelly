import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <Row>
            <Col>
              <h1>Logo</h1>
            </Col>
            <Col>
              <div className="mid">
                {/* <h3>Subscribe</h3> */}
                <div className="icons">
                  <a>
                    <BsLinkedin size={30} />
                  </a>
                  <a>
                    <BsFacebook size={30} />
                  </a>
                  <a>
                    <BsTwitter size={30} />
                  </a>
                </div>
              </div>
            </Col>
            <Col className="last">
              <button>Contact us now!</button>
            </Col>
          </Row>
        </div>
        <div className="subfooter">© 2023 MSKelly. All Rights Reserved.</div>
      </>
    );
  }
}

export default Footer;
