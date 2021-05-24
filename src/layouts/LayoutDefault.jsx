import {Col, Container, Row} from "react-bootstrap";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Main from "../components/layout/Main";
import './LayoutDefault.scss';

function LayoutDefault() {
  return (
    <div className="layout-default-app">
      <Header options={{
        title: 'Gestor de Eventos'
      }} />
      <Container className="">
        <Row className="py-3">
          <Col className="d-none d-md-block" xs={3}>
            <Sidebar />
          </Col>
          <Col xs={12} md={8}>
            <Main />
          </Col>
          <Col className="d-none d-md-block" />
        </Row>
      </Container>
    </div>
  )
}

export default LayoutDefault;
