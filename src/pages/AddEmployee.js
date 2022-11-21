import { Container, Row, Col} from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id: '',
        rut: '',
        nombres: '',
        apellidos: '',
        categoria: '',
        fechaNacimiento: '',
        fechaIngreso: '',
    });

    const handleInputChange = (event) => {
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });

        axios.post('http://localhost:8012/empleado', employee)
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location = "/employees" //redirect
            })
    }

    return (
        <Container style={{ marginTop: '70px' }}>
            <Row>
                <Col>
                    <h1>Agregar Empleado</h1>
                </Col>
            </Row>
            <form className='col' onSubmit={handleSubmit}><br></br>
                <label>Rut</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese el rut'
                        className='form-control'
                        type='text'
                        name='rut'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Nombres</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese los nombres'
                        className='form-control'
                        type='text'
                        name='nombres'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Apellidos</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese los apellidos'
                        className='form-control'
                        type='text'
                        name='apellidos'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Categoría</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese la categoría'
                        className='form-control'
                        type='text'
                        name='categoria'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Fecha de nacimiento</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese la fecha de nacimiento'
                        className='form-control'
                        type='date'
                        name='fechaNacimiento'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                <label>Fecha de ingreso</label>
                <div className='col-md-3'>
                    <input
                        placeholder='Ingrese la fecha de ingreso'
                        className='form-control'
                        type='date'
                        name='fechaIngreso'
                        onChange={handleInputChange}
                    ></input>
                </div><br></br>

                {/* <div className='col-md-3'>
                        <input
                            placeholder='Ingrese Estado'
                            className='form-control'
                            type='text'
                            name='estado'
                            onChange = {handleInputChange}
                        ></input>
                    </div> */}

               {/*  <label>Estado</label>
                <div className='col-md-3'>
                    <select
                        placeholder='Ingrese Estado'
                        className='form-control'
                        type='text'
                        name='estado'
                        onChange={handleInputChange}>
                        <option selected>Seleccione el estado</option>
                        <option value='0'>No autorizada</option>
                        <option value='1'>Autorizada</option>
                    </select>
                </div><br></br> */}
                <div className='col-md-3'>
                    <button className="btn btn-primary" type="submit">Agregar Empleado</button>
                </div>
            </form>

        </Container>
    );


}

export default AddEmployee;