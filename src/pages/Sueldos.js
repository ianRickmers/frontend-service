import axios from 'axios';
import { Container, Row, Col, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import authToken from './utils/AuthToken';

if(localStorage.jwtToken) {
    authToken(localStorage.jwtToken);
}

const Sueldo = () => {
    const [sueldo, setSueldo] = useState([]);


    const getSueldo = async () => {
        try{
            let url = 'http://localhost:8012/sueldos';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setSueldo(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getSueldo();
    }, []);
    

    //<div>{(()=>{if(inasistencia.autorizada){return <td>Justificada</td>}else{return <td>No justificada</td>}})}</div>
    return (
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Sueldos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Rut</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Categoria</th>
                                <th>Años de servicio</th>
                                <th>Sueldo fijo</th>
                                <th>Bonificacion por años de servicio</th>
                                <th>Monto horas extra</th>
                                <th>Monto descuentos</th>
                                <th>Sueldo bruto</th>
                                <th>Cotizacion previsional</th>
                                <th>Cotizacion salud</th>
                                <th>Monto final</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sueldo.map((sueldo) => (
                                <tr key={sueldo.id}>
                                    <td>{sueldo.id}</td>
                                    <td>{sueldo.rut}</td>
                                    <td>{sueldo.nombres}</td>
                                    <td>{sueldo.apellidos}</td>
                                    <td>{sueldo.categoria}</td>
                                    <td>{sueldo.anosServicio}</td>
                                    <td>{sueldo.sueldoFijo}</td>
                                    <td>{sueldo.bonificacionAnosServicio}</td>
                                    <td>{sueldo.montoHorasExtra}</td>
                                    <td>{sueldo.montoDescuentos}</td>
                                    <td>{sueldo.sueldoBruto}</td>
                                    <td>{sueldo.cotizacionPrevisional}</td>
                                    <td>{sueldo.cotizacionSalud}</td>
                                    <td>{sueldo.montoFinal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
};

export default Sueldo;

