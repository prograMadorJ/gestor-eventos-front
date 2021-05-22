import { Route, Switch } from "react-router-dom";
import UserRegister from "../views/UserRegister";
import EventRegister from "../views/EventRegister";


function AppRoutes() {
  return (
    <Switch>
      <Route path="/eventos" component={EventRegister} />
      <Route path="/usuarios" component={UserRegister} />
    </Switch>
  )
}

export default AppRoutes;
