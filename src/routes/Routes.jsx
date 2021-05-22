import { Route, Switch } from "react-router-dom";
import UserRegister from "../views/UserRegister";


function AppRoutes() {
  return (
    <Switch>
      <Route path="/usuarios" component={UserRegister} />
    </Switch>
  )
}

export default AppRoutes;
