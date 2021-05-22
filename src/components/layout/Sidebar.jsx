import {Card, Nav} from "react-bootstrap";
import { BsTable } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import './Sidebar.scss'

function Sidebar() {
  return (
    <div className="sidebar-app">
      <Card className="card-panel">
        <Card.Body>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">
              <div className="d-flex align-items-center">
                <BsTable className="mr-2"/>
                <span>
                Eventos
                </span>
              </div>
            </Nav.Link>
            <Nav.Link eventKey="link-1">
              <div className="d-flex align-items-center">
                <BsFillPersonFill className="mr-2"/>
                <span>
                Usuários
                </span>
              </div>
            </Nav.Link>
          </Nav>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Sidebar;
