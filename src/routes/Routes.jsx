import { Route, Switch } from "react-router-dom";
import UserRegister from "../views/UserRegister";
import EventRegister from "../views/EventRegister";
import Auth from "../views/Auth";


function AppRoutes() {
  return (
    <Switch>
      <Route path="/eventos" component={EventRegister} />
      <Route path="/usuarios" component={UserRegister} />
      <Route path="/logout">
        <Auth isLogout={true} />
      </Route>
    </Switch>
  )
}

export default AppRoutes;
