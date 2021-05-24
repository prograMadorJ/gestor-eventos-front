import { Modal, Spinner} from "react-bootstrap";


function ModalDialogMessage (props) {
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
            {props.children}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalDialogMessage;
