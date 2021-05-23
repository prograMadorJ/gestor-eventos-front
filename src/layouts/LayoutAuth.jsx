import Auth from "../views/Auth";
import {Col, Row} from "react-bootstrap";


function LayoutAuth() {
  return (
    <div className="layout-login d-flex justify-content-center align-items-center vh-100">
      <Row className="d-flex justify-content-center">
        <Col md={6} className="m-3">
          <Auth />
        </Col>
      </Row>
    </div>
  )
}

export default LayoutAuth;
