import { Button, Col, Container, Row } from "react-bootstrap";
import axios from 'axios';

const calcularPlanilla = async () => {

    await axios.get('http://localhost:8012/descuento')
    await axios.get('http://localhost:8012/horaextra/calcular')
    await axios.get('http://localhost:8012/sueldos/calcular')
    
}

const Index = () => {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
            <Row>
                <Col lg="12" sm="4" className="mt-5">
                    <h1 className="text-center">Haz click abajo para calcular sueldos</h1>
                </Col>
                <Col lg="12" sm="8">
                    <div className="d-grid gap-2">
                        <Button className="mt-5" onClick={() => calcularPlanilla()} size="lg">Calcular sueldos</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Index;