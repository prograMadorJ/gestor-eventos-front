import {Container, Nav, Navbar} from "react-bootstrap";
import PropTypes from 'prop-types';
import { BsBoxArrowRight} from "react-icons/all";

function Header(props) {
  
  const { title } = props.options || {}
  
  return (
    <div className="header-app">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="d-flex align-items-center">
              {title}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto d-sm-block d-lg-none">
              <Nav.Link href="/app/eventos">Eventos</Nav.Link>
              <Nav.Link href="/app/usuarios">Usuários</Nav.Link>
              <Nav.Link href="/app/logout">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav.Link href="/app/logout" className="d-none d-lg-block">
            <div className="d-flex align-items-center">
              <span className="mr-2">Sair</span>
              <BsBoxArrowRight />
            </div>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  options: PropTypes.object
}

export default Header;
