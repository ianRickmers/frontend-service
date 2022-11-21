import axios from 'axios';
import { Container, Row, Col, Table} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Descuentos = () => {
    const [descuentos, setDescuentos] = useState([]);


    const getDescuentos = async () => {
        try{
            let url = 'http://localhost:8012/descuento/getall';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setDescuentos(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getDescuentos();
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
                                <th>Descuentos de 10 minutos</th>
                                <th>Descuentos de 25 minutos</th>
                                <th>Descuentos de 45 minutos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {descuentos.map((descuentos) => (
                                <tr key={descuentos.id}>
                                    <td>{descuentos.id}</td>
                                    <td>{descuentos.rut}</td>
                                    <td>{descuentos.desc10}</td>
                                    <td>{descuentos.desc25}</td>
                                    <td>{descuentos.desc45}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
};

export default Descuentos;

