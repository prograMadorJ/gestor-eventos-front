import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import './LayoutDefault.scss';

function LayoutDefault() {
  return (
    <div className="layout-default-app">
      <Header />
      <Container className="">
        <Row className="py-3">
          <Col className="d-none d-md-block" xs={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={7}>
            <Main />
          </Col>
          <Col className="d-none d-md-block" xs={2} />
        </Row>
      </Container>
    </div>
  )
}

export default LayoutDefault;
