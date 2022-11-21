import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const authenticateUser = (usuario, clave) => {
        const credentials = {
            usuario: usuario,
            clave: clave
        }
        //console.log(credentials);
        axios.post("http://localhost:8012/sueldos/autenticar", credentials)
            .then(response => {
                let token = response.data.jwtToken;
                console.log(token);
                console.log(response.data);
                localStorage.setItem('jwtToken', token);
            })
    };
    return (
         <Form style={{ marginTop: '70px' }}>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button block size="lg" className='mt-4' /* type="submit" */ onClick={()=>authenticateUser(email,password)}>
                Login
            </Button>
        </Form> 
    )
};

export default Login;