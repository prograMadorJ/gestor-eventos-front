import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

function PrivateRoute ({isAuthenticated, component, ...rest }) {
  return (
    <Route {...rest} render={({location}) => {
      return isAuthenticated === true
        ? component()
        : <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }} />
    }} />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  component: PropTypes.func
}

export default PrivateRoute
