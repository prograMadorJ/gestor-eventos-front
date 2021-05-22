import {Button, Modal, Spinner} from "react-bootstrap";


function ModalMessage (props) {
  return (
    <>
      <Modal show={props.status > 0} backdrop="static" keyboard={false}>
        {props.title && <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>}
        <Modal.Body>
          {props.showSpinner && <Spinner animation="border"  size="sm" className="mr-2"/>}
          {props.message}
          <div className="d-flex justify-content-end mt-3">
            {props.handleClose && <Button variant="primary" size="sm" className="px-4" onClick={props.handleClose}>OK</Button>}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalMessage;
