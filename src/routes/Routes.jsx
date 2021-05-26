import { Route, Switch } from "react-router-dom";
import UserRegister from "../views/UserRegister";
import EventRegister from "../views/EventRegister";
import Auth from "../views/Auth";


function AppRoutes() {
  return (
    <Switch>
      <Route path="/app/eventos" component={EventRegister} />
      <Route path="/app/usuarios" component={UserRegister} />
      <Route path="/app/logout">
        <Auth isLogout={true} />
      </Route>
    </Switch>
  )
}

export default AppRoutes;
