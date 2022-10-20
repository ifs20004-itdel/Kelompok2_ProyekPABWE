import Table from 'react-bootstrap/Table';
import Footer from './Footer';

function Organisasi() {
  return (
    <>
    <div
      className="py-3 px-5 text-center w-auto"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <h3 className="w-100 h2">Struktur Organisasi</h3>
    </div>
    <Table className='w-75 m-auto' striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
    </Table>
    <Footer></Footer>
    </>
  );
}

export default Organisasi;