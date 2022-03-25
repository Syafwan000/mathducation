import { Container, InputGroup } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import Helmet from 'react-helmet';
import { useState } from 'react';
import './Exponent.css';

function Exponent() {
    const [number, setNumber] = useState('');
    const [exponent, setExponent] = useState('');

    const result =  number.replace(/,/g,'') ** exponent;

    return (
        <>
            <Helmet>
                <title>Mathducation | Exponent</title>
            </Helmet>
            <Container className="my-5 text-center">
                <h1 className="title-exponent">Exponent</h1>
                <p className="title-exponent-text mt-3">Exponent in mathematics can be interpreted as<br /> repetition of the number itself.</p>
            </Container>
            <Container className="exponent-wrapper mt-3">
                <InputGroup className="d-flex justify-content-center">
                    <NumberFormat className="exponent-input1" placeholder="Number" aria-label="Number" aria-describedby="basic-addon3" thousandSeparator={true} allowNegative={false} onChange={
                            function(e) {
                                setNumber(e.target.value);
                            }
                    } />
                </InputGroup>
                <InputGroup className="mt-4 d-flex justify-content-center">
                    <NumberFormat className="exponent-input2" placeholder="Exponent" aria-label="Exponent" aria-describedby="basic-addon4" allowNegative={false} onChange={
                            function(e) {
                                setExponent(e.target.value);
                            }
                    } />
                </InputGroup>
                <Container>
                    <h4 className="exponent-info text-center mt-3">Result</h4>
                    <Container className="d-flex justify-content-center">
                        <NumberFormat className="exponent-result text-center" thousandSeparator={true} value={result} disabled />
                    </Container>
                </Container>
            </Container>
        </>
    )
}

export default Exponent;