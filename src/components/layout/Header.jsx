import {Container, Nav, Navbar} from "react-bootstrap";
import PropTypes from 'prop-types';

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
            <Nav className="mr-auto d-none">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

Header.propTypes = {
  options: PropTypes.object
}

export default Header;
