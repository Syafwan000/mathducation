import { Container, Button, Row, Col } from 'react-bootstrap';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { useState } from 'react';
import Helmet from 'react-helmet';
import './Calculator.css';

function Calculator() {
    const [result, setResult] = useState('');

    function handleClick(e) {
        setResult(result.concat(e.target.name));
    }

    function clear() {
        setResult('');
    }

    function backspace() {
        setResult(result.slice(0, -1));
    }

    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch(err) {
            setResult("Error")
        }
    }

    return (
        <>
            <Helmet>
                <title>Mathducation | Calculator</title>
            </Helmet>
            <Container className="my-5 text-center">
                <h1 className="title-calculator">Calculator</h1>
            </Container>
            <Container className="mt-3 mb-4">
                <form className="d-flex justify-content-center">
                    <input type="text" className="calculator-display" value={result} readOnly />
                </form>
                <Container className="keypad-wrapper">
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="light" className="keypad keypad-clear shadow-none" id="clear" onClick={clear}>CE</Button>
                            <Button variant="light" className="keypad keypad-backspace shadow-none" id="backspace" onClick={backspace}><BsFillBackspaceFill /></Button>
                            <Button variant="light" className="keypad keypad-operation shadow-none" name="/" onClick={handleClick}>&divide;</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="light" className="keypad shadow-none" name="7" onClick={handleClick}>7</Button>
                            <Button variant="light" className="keypad shadow-none" name="8" onClick={handleClick}>8</Button>
                            <Button variant="light" className="keypad shadow-none" name="9" onClick={handleClick}>9</Button>
                            <Button variant="light" className="keypad keypad-operation shadow-none" name="*" onClick={handleClick}>&times;</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="light" className="keypad shadow-none" name="4" onClick={handleClick}>4</Button>
                            <Button variant="light" className="keypad shadow-none" name="5" onClick={handleClick}>5</Button>
                            <Button variant="light" className="keypad shadow-none" name="6" onClick={handleClick}>6</Button>
                            <Button variant="light" className="keypad keypad-operation shadow-none" name="-" onClick={handleClick}>-</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="light" className="keypad shadow-none" name="1" onClick={handleClick}>1</Button>
                            <Button variant="light" className="keypad shadow-none" name="2" onClick={handleClick}>2</Button>
                            <Button variant="light" className="keypad shadow-none" name="3" onClick={handleClick}>3</Button>
                            <Button variant="light" className="keypad keypad-operation shadow-none" name="+" onClick={handleClick}>+</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="light" className="keypad shadow-none" name="0" onClick={handleClick}>0</Button>
                            <Button variant="light" className="keypad shadow-none" name="." onClick={handleClick}>.</Button>
                            <Button variant="light" className="keypad keypad-calculate shadow-none" onClick={calculate}>=</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Calculator;