import { Container, InputGroup, FormControl } from 'react-bootstrap';
import Helmet from 'react-helmet';
import './Discount.css';

function Discount() {
    return (
        <>
            <Helmet>
                <title>Mathducation | Discount</title>
            </Helmet>
            <Container className="my-4 text-center">
                <h1 className="title-discount">Discount</h1>
                <p className="title-discount-text mt-3">Discounts are one of the most powerful marketing strategies<br /> to attract consumers to buy products or services offered by sellers.</p>
            </Container>
            <Container>
                <InputGroup>
                    <InputGroup.Text id="basic-addon1">Rp</InputGroup.Text>
                    <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </InputGroup>
            </Container>
        </>
    )
}

export default Discount;