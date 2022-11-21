import axios from 'axios';
import { Container, Row, Col, Table, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';
const Horasextra = () => {
    const [horasextra, setHorasextra] = useState([]);


    const getHorasextra = async () => {
        try{
            let url = 'http://localhost:8012/horaextra';
            let response = await axios.get(url);
            if (response.status === 200){
                console.log(response.data);
                setHorasextra(response.data);
            }
        }
        catch(err){
            console.error(err.message);
        }
    };

    useEffect(() => {
        getHorasextra();
    }, []);
    

    const handleAutorizaciones = async(id) => {
        console.log(id);
        await axios.put(`http://localhost:8012/horaextra/update/${id}`)
        //console.log(id);
    }

    const valor = (string)=>{
        if(string){
            return "Autorizadas"
        }else{
            return "No autorizadas"
        }
    }
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
                                <th>Cantidad de horas</th>
                                <th>Cantidad de minutos</th>
                                <th>Autorizacion</th>
                                <th>Cambiar estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {horasextra.map((horaextra) => (
                                <tr key={horaextra.id}>
                                    <td>{horaextra.id}</td>
                                    <td>{horaextra.rut}</td>
                                    <td>{horaextra.cantidadHoras}</td>
                                    <td>{horaextra.cantidadMinutos}</td>
                                    <td>{(()=>valor(horaextra.autorizada))()}</td>
                                    <td><Button variant="danger" href="/horasextra" onClick={()=>handleAutorizaciones(horaextra.rut)}>Cambiar estado</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
};

export default Horasextra;

