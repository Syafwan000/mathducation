import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { useState } from 'react';
import Helmet from 'react-helmet';
import './Discount.css';

function Discount() {
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');

    const result1 = price.replace(/,/g,'') * discount / 100;
    const result2 = price.replace(/,/g,'') - (price.replace(/,/g,'') * discount / 100);

    return (
        <>
            <Helmet>
                <title>Mathducation | Discount</title>
            </Helmet>
            <Container className="my-5 text-center">
                <h1 className="title-discount">Discount</h1>
                <p className="title-discount-text mt-3">Discounts are one of the most powerful marketing strategies<br /> to attract consumers to buy products or services offered by sellers.</p>
            </Container>
            <Container className="discount-wrapper mt-3">
                <InputGroup className="d-flex justify-content-center">
                    <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                    <NumberFormat className="discount-input1" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1" thousandSeparator={true} allowNegative={false} onChange={
                        function(e) {
                            setPrice(e.target.value);
                        }
                    } />
                </InputGroup>
                <InputGroup className="mt-4 d-flex justify-content-center">
                    <NumberFormat className="discount-input2" placeholder="Discount" aria-label="Discount" aria-describedby="basic-addon2" allowNegative={false} onChange={
                        function(e) {
                            setDiscount(e.target.value);
                        }
                    } />
                    <InputGroup.Text id="basic-addon2">%</InputGroup.Text>
                </InputGroup>
                <Container>
                    <Row>
                        <Col>
                            <h4 className="discount-info text-center mt-3">Discount</h4>
                            <Container className="d-flex justify-content-center">
                                <NumberFormat className="discount-result text-center" thousandSeparator={true} value={result1} prefix={'Rp. '} disabled />
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="discount-info text-center mt-3">Price After Discount</h4>
                            <Container className="d-flex justify-content-center">
                                <NumberFormat className="discount-result text-center" thousandSeparator={true} value={result2} prefix={'Rp. '} disabled />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Discount;