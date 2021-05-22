import {Card} from "react-bootstrap";
import AppRoutes from "../../routes/Routes";
import './Main.scss'

function Main() {
  return (
    <div className="main-app">
      <Card className="card-panel">
        <Card.Body>
          <AppRoutes />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Main;
