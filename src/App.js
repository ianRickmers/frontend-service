import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { Container} from 'react-bootstrap';
import Index from './pages/Index';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import Inasistencia from './pages/Inasistencia';
import HoraExtra from './pages/HoraExtra';
import Descuento from './pages/Descuento';

function App() {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Index/>}  exact/>
          <Route path="/employees" element={<Employees/>} exact/>
          <Route path="/employees/add" element={<AddEmployee/>} exact/>
          <Route path="/inasistencia" element={<Inasistencia/>} exact/>
          <Route path="/horasextra" element={<HoraExtra/>} exact/>
          <Route path="/descuento" element={<Descuento/>} exact/>
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
