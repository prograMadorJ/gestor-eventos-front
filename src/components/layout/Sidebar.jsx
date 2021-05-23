import {Card, Nav} from "react-bootstrap";
import { BsTable } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import './Sidebar.scss'
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar-app">
      <Card className="card-panel">
        <Card.Body>
          <Nav defaultActiveKey="/" className="flex-column">
            <Link to="/eventos" className="nav-link">
              <div className="d-flex align-items-center">
                <BsTable className="mr-2"/>
                <span>
                Eventos
                </span>
              </div>
            </Link>
            <Link to="/usuarios"  className="nav-link">
              <div className="d-flex align-items-center">
                <BsFillPersonFill className="mr-2"/>
                <span>
                Usuários
                </span>
              </div>
            </Link>
          </Nav>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Sidebar;
