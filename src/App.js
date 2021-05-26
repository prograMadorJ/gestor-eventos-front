import LayoutDefault from "./layouts/LayoutDefault";
import LayoutAuth from "./layouts/LayoutAuth";
import {Redirect, Switch} from "react-router-dom";
import { connect } from "react-redux";
import PublicRoute from "./components/auth/PublicRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import ReactJson from "react-json-view";

function App(props) {
  return (
    <div className="App">
      { process.env.NODE_ENV === 'development' && <ReactJson name="store" src={props.store} collapsed={true} theme="eighties"/> }
      <Switch>
        <PublicRoute path='/app/login' component={LayoutAuth} isAuthenticated={props.authState.isAuthenticated} typeAccess="no-auth" />
        <PrivateRoute path="/app" component={LayoutDefault} isAuthenticated={props.authState.isAuthenticated} />
        <Redirect exact path="/" to="/app" />
      </Switch>
    </div>
  );
}

const mapStateToProps = store => ({
  authState: store.authReducer,
  store
})

export default connect(mapStateToProps)(App)
