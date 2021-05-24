import {Button, Table} from "react-bootstrap";
import PropTypes from 'prop-types';


function DataTableList(props) {
  
  const data = props.data || []
  const {handleEdit, handleDelete} = props.actions || {}
  
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
              <Button onClick={() => handleEdit(item)} size="sm" className="mr-2">Editar</Button>
              <Button onClick={() => handleDelete(item)} size="sm" variant="danger">Excluir</Button>
            </td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  )
}

DataTableList.propTypes = {
  data: PropTypes.array,
  actions: PropTypes.object
}

export default DataTableList;
