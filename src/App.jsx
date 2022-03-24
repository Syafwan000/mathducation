import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'
import Calculator from './components/Calculator';
import Discount from './components/Discount';
import Exponent from './components/Exponent';
import Home from './components/Home';
import Helmet from 'react-helmet';
import 'animate.css';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Mathducation</title>
      </Helmet>
      <Container fluid className="big-wrapper">
        <h1 className="big-title">
          <Link className="big-link" to="/">Mathducation</Link>
        </h1>
      </Container>
      <Container fluid className="text-center">
        <Row className="nav-list">
          <Col className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator</Link>
          </Col>
          <Col className="nav-item">
            <Link className="nav-link" to="/discount">Discount</Link>
          </Col>
          <Col className="nav-item">
            <Link className="nav-link" to="/exponent">Exponent</Link>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/discount" element={<Discount />}></Route>
        <Route path="/exponent" element={<Exponent />}></Route>
      </Routes>
    </>
  );
}

export default App;
