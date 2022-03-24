import { Container } from 'react-bootstrap';
import Helmet from 'react-helmet';
import './Calculator.css';

function Calculator() {
    return (
        <>
            <Helmet>
                <title>Mathducation | Calculator</title>
            </Helmet>
            <Container className="my-4 text-center">
                <h1 className="title-calculator">Calculator</h1>
            </Container>
        </>
    )
}

export default Calculator;