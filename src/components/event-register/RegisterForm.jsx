import { Formik } from "formik";
import * as yup from 'yup';
import {Button, Col, Form } from "react-bootstrap";
import ModalMessage from "../modal/ModalMessage";
import PropTypes from 'prop-types';
import {dateToStandartDateString} from "../../utils/date-utils";

function RegisterForm(props) {
  
  const {handleSubmit, handleCancel, modal, editData, users} = props.options || {};
  const userOptions = [...[{id: null, name: ''}], ...users || []]
  
  const schema = yup.object().shape({
    name: yup.string().required('obrigatório'),
    date: yup.date().required('obrigatório'),
    user: yup.string().nullable().required('obrigatório')
  });
  
  const initialFormValues = () => {
    return {
      ...{
        name: '',
        date: '',
        user: null
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
          <Form.Row className="d-flex justify-content-between">
            <Form.Group as={Col} md="12" controlId="groupName">
              <Form.Label>Nome do Evento</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
                disabled={modal.status === 1}
                autoComplete="off"
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="groupDate">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                name="date"
                value={dateToStandartDateString(values.date)}
                onChange={handleChange}
                isInvalid={touched.date && !!errors.date}
                autoComplete="off"
                disabled={modal.status === 1}
              />
              <Form.Control.Feedback type="invalid">
                {errors.date}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="groupUser">
              <Form.Label>Responsável</Form.Label>
              <Form.Control
                as="select"
                custom
                name="user"
                value={values.user}
                onChange={handleChange}
                isInvalid={touched.user && !!errors.user}
                disabled={modal.status === 1}
              >
                {
                  userOptions.map((item, index) =>
                    <option key={index} value={item.id} label={item.name} />
                  )
                }
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.user}
              </Form.Control.Feedback>
            </Form.Group>
            
            
            
            {modal.status !== 1 && modal.status !== 2 &&
            <Form.Group as={Col} xs={12} controlId="groupControls">
              <Button variant="primary" type="submit" size="sm" className="px-4 mr-3" disabled={modal.status === 1}>
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
