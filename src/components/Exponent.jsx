import { Container } from 'react-bootstrap';
import Helmet from 'react-helmet';
import './Exponent.css';

function Exponent() {
    return (
        <>
            <Helmet>
                <title>Mathducation | Exponent</title>
            </Helmet>
            <Container className="my-4 text-center">
                <h1 className="title-exponent">Exponent</h1>
            </Container>
        </>
    )
}

export default Exponent;