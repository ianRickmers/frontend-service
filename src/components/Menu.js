import { Nav, Navbar, Container } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" >
            <Container>
                <Navbar.Brand href="/">App Empleados</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar"/>
                    <Navbar.Collapse id="responsive-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Inicio</Nav.Link>
                            <Nav.Link href="/upload">Subir marcas de reloj</Nav.Link>
                            <Nav.Link href="/employees">Empleados</Nav.Link>
                            <Nav.Link href="/marcas">Marcas</Nav.Link>                            
                            <Nav.Link href="/inasistencia">Inasistencias</Nav.Link>
                            <Nav.Link href="/horasextra">Horas extra</Nav.Link>
                            <Nav.Link href="/descuento">Descuento</Nav.Link>
                            <Nav.Link href="/sueldo">Sueldos</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Menu;