import axios from 'axios';
import { Container, Row, Col, Table, Button, Modal} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Employees = () => {
    const [employees, setEmployees] = useState([]);

    const [rut, setRut] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getEmployees = async () => {
        try{
            let url = 'http://localhost:8012/empleado';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setEmployees(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);
    
    const print = (rut) => {
        setRut(rut);
        handleShow();
    }

    const handleDelete = async(id) => {
        await axios.get(`http://localhost:8012/empleado/delete/${id}`)
        //console.log(id);
    }


    return (
        <>
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Lista de empleados</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button href="/employees/add"variant="primary" className="mt-4">
                    Crear empleado
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Rut</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Categoría</th>
                                <th>Fecha de nacimiento</th>
                                <th>Fecha de ingreso</th>
                                <th>Eliminar empleado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.rut}</td>
                                    <td>{employee.nombres}</td>
                                    <td>{employee.apellidos}</td>
                                    <td>{employee.categoria}</td>
                                    <td>{employee.fechaNacimiento}</td>
                                    <td>{employee.fechaIngreso}</td>
                                    <td><Button variant="danger" onClick={()=>print(employee.rut)}>Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar empleado</Modal.Title>
            </Modal.Header>
            <Modal.Body>¿Está seguro que desea eliminar el empleado?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" href="/employees" onClick={()=>handleDelete(rut)}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
};

export default Employees;

