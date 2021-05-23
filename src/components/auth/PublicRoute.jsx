import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';

function PublicRoute ({isAuthenticated, typeAccess, component, ...rest }) {
  return (
    <Route {...rest} render={({location}) => {
      return isAuthenticated === true && typeAccess === 'no-auth'
        ? <Redirect to={{
          pathname: '/',
          state: { from: location }
        }} />
        : component()
    }} />
  )
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  typeAccess: PropTypes.string,
  component: PropTypes.func
}

export default PublicRoute
