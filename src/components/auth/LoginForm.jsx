import * as yup from "yup";
import {Formik} from "formik";
import {Button, Col, Form, Spinner} from "react-bootstrap";
import PropTypes from 'prop-types';


function LoginForm(props) {
  
  const {handleSubmit, authState} = props.options || {};
  
  const schema = yup.object().shape({
    email: yup.string()
      .email('e-mail inválido')
      .required('obrigatório'),
    password: yup.string()
      .required('obrigatório')
  });
  
  const initialFormValues = () => {
    return {
      email: '',
      password: ''
    }
  }
  
  
  return (
    <div className="login-form">
      <div className="d-flex justify-content-center">
        <h2>Login</h2>
      </div>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={initialFormValues()}
      >
        {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting
          }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="groupEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                  autoComplete="off"
                  disabled={isSubmitting}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" controlId="groupPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                  autoComplete="new-password"
                  disabled={isSubmitting}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              {authState.status !== 1 && authState.status !== 2 && <Form.Group as={Col} className="d-flex justify-content-center" controlId="groupControls">
                <Button variant="primary" type="submit" size="sm" className="px-4 mr-3" disabled={isSubmitting}>
                  Login
                </Button>
              </Form.Group>}
              {authState.status === 1 &&
                <div className="d-flex justify-content-center align-items-center w-100">
                  <Spinner animation="border" size="sm" role="status" />
                  <div className="ml-2">Aguarde...</div>
                </div>
              }
            </Form.Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

LoginForm.propTypes = {
  options: PropTypes.object
}

export default LoginForm;
