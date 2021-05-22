import {Table} from "react-bootstrap";
import PropTypes from 'prop-types';


function DataTableList(props) {
  
  const data = props.data || []
  
  return (
    <div className="data-table-list">
      <Table striped bordered hover variant="light">
        <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Data</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) =>
          <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.data}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  )
}

DataTableList.propTypes = {
  data: PropTypes.array
}

export default DataTableList;
