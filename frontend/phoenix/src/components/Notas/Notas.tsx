import Table from "react-bootstrap/Table";
type Props = {};

function Notas({}: Props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Nota Laboratorio</th>
          <th>Nota Final</th>
        </tr>
      </thead>
      {/*Aqui es donde tiene que pasar por parametros mediante alguna api la informacion 
      del estudiante*/}
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Notas;
