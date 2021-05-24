import { Formik } from "formik";
import * as yup from 'yup';
import {Button, Col, Form } from "react-bootstrap";
import ModalMessage from "../modal/ModalMessage";
import PropTypes from 'prop-types';

function RegisterForm(props) {
  
  const {handleSubmit, handleCancel, modal, editData} = props.options || {};
  
  const schema = yup.object().shape({
    name: yup.string()
      .required('obrigatório'),
    email: yup.string()
      .email('e-mail inválido')
      .required('obrigatório'),
    password: yup.string()
      .min(8, 'senha deve ter no mínimo 8 caractéres')
      .required('obrigatório')
  });
  
  const initialFormValues = () => {
    return {
      ...{
        name: '',
        email: '',
        password: ''
      },
      ...editData || {}}
  }
  
  
  return (
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
            <Form.Group as={Col} md="12" controlId="groupName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
                disabled={isSubmitting}
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
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
            {modal.status !== 1 && modal.status !== 2 && <Form.Group as={Col} controlId="groupControls">
              <Button variant="primary" type="submit" size="sm" className="px-4 mr-3" disabled={isSubmitting}>
                Salvar
              </Button>
              <Button variant="secondary" type="button" size="sm" onClick={handleCancel} className="px-3">
                Cancelar
              </Button>
            </Form.Group>}
          </Form.Row>
          <ModalMessage
            status={modal.status}
            title={modal.title}
            message={modal.message}
            showSpinner={modal.showSpinner}
            handleClose={modal.handleClose}
          />
        </Form>
      )}
    </Formik>
  );
}

RegisterForm.propTypes = {
  options: PropTypes.object
}

export default RegisterForm;
