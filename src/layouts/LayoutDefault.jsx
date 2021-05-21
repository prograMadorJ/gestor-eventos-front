import Header from "../components/Header";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function LayoutDefault() {
  return (
    <div className="layout-default-app">
      <Header />
      <Container className="">
        <Row className="py-3">
          <Col className="" xs={3}>
            <Sidebar />
          </Col>
          <Col xs={7}>1 of 1</Col>
          <Col xs={2}>1 of 1</Col>
        </Row>
      </Container>
    </div>
  )
}

export default LayoutDefault;
