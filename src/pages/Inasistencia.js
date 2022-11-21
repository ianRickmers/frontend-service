import axios from 'axios';
import { Container, Row, Col, Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Inasistencias = () => {
    const [inasistencias, setInasistencias] = useState([]);


    const getInasistencias = async () => {
        try{
            let url = 'http://localhost:8012/inasistencias';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setInasistencias(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getInasistencias();
    }, []);
    

    const handleJustificar = async(id) => {
        console.log(id);
        await axios.put(`http://localhost:8012/inasistencias/justificar/${id}`)
        //console.log(id);
    }

    const valor = (string)=>{
        if(string){
            return "Justificado"
        }else{
            return "No justificado"
        }
    }
    //<div>{(()=>{if(inasistencia.autorizada){return <td>Justificada</td>}else{return <td>No justificada</td>}})}</div>
    return (
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Inasistencias</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Rut</th>
                                <th>Fecha de inasistencia</th>
                                <th>Justificada</th>
                                <th>Justificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inasistencias.map((inasistencia) => (
                                <tr key={inasistencia.id}>
                                    <td>{inasistencia.id}</td>
                                    <td>{inasistencia.rut}</td>
                                    <td>{inasistencia.fecha}</td>
                                    <td>{(()=>valor(inasistencia.justificada))()}</td>
                                    <td><Button variant="danger" href="/inasistencia" onClick={()=>handleJustificar(inasistencia.rut)}>Cambiar estado</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
};

export default Inasistencias;

