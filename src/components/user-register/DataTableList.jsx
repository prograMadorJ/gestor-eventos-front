import {Button, Table} from "react-bootstrap";
import PropTypes from 'prop-types';
import {BsPencil, BsTrash} from "react-icons/all";
import {useState} from "react";
import ModalDialogMessage from "../modal/ModalDialogMessage";


function DataTableList(props) {
  
  const data = props.data || []
  const {handleEdit, handleDelete} = props.actions || {}
  const [showDialog, setShowDialog] = useState(0)
  const [handleYes, setHandleYes] = useState()
  const [handleNo, setHandleNo] = useState()
  
  
  const dialogActions = (actionYes, actionNo) => {
    
    setShowDialog(1)
    
    setHandleYes(() => function () {
      setShowDialog(0)
      if (actionYes) actionYes()
    })
    
    setHandleNo(() => function () {
      setShowDialog(0)
      if (actionNo) actionNo()
    })
    
  }
  
  return (
    <div className="data-table-list">
      <Table striped bordered hover variant="light">
        <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) =>
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <Button onClick={() => handleEdit(item)} size="sm" className="mr-2" variant="transparent" title="editar">
                <BsPencil color="#007bff" strokeWidth={0.5}/>
              </Button>
              <Button onClick={() => dialogActions( () => handleDelete(item))} size="sm" variant="transparent" title="remover">
                <BsTrash color="#dc3545" strokeWidth={0.5}/>
              </Button>
            </td>
          </tr>
        )}
        </tbody>
      </Table>
      <ModalDialogMessage status={showDialog} title="Excluir?" message="Deseja realmente exlcuir?">
        <div className="d-flex justify-content-end mt-3">
          <Button variant="primary" size="sm" className="px-4 mr-2" onClick={handleYes}>Sim</Button>
          <Button variant="secondary" size="sm" className="px-4" onClick={handleNo}>Não</Button>
        </div>
      </ModalDialogMessage>
    </div>
  )
}

DataTableList.propTypes = {
  data: PropTypes.array,
  actions: PropTypes.object
}

export default DataTableList;
