import axios from 'axios';
import { Container, Row, Col, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Marcas = () => {
    const [marcas, setMarcas] = useState([]);


    const getMarcas = async () => {
        try{
            let url = 'http://localhost:8012/marcas';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setMarcas(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getMarcas();
    }, []);
    

    //<div>{(()=>{if(inasistencia.autorizada){return <td>Justificada</td>}else{return <td>No justificada</td>}})}</div>
    return (
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Horas extra</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Rut</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Minuto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {marcas.map((marcas) => (
                                <tr key={marcas.id}>
                                    <td>{marcas.id}</td>
                                    <td>{marcas.rut}</td>
                                    <td>{marcas.fecha}</td>
                                    <td>{marcas.hora}</td>
                                    <td>{marcas.minuto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
};

export default Marcas;

