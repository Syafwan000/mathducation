import { AiOutlineCalculator, AiOutlinePercentage, AiOutlineFieldNumber } from "react-icons/ai";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Blogging from "../assets/blogging.svg";
import './Home.css';

function Home() {
    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col className="home-wrapper py-5">
                        <h1 className="content-title">
                            Calculate easier<br />with <span className="mathducation">Mathducation</span>
                        </h1>
                        <p className="content-text pt-4">
                            With everything that is needed, <b>Mathducation</b> is here to help you with calculation problems, maybe this doesn't help all of your problems, but it might help some people.
                        </p>
                        <Button className="content-button ps-3 shadow-none" variant="light" onClick={handleShow}>
                            Getting Started&nbsp;&nbsp;<FiArrowRight className="arrow-icon animate__animated animate__headShake animate__slower animate__infinite" />
                        </Button>
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header className="justify-content-center">
                                <Modal.Title>
                                    <h4 className="menu-title mb-0">Mathducation Menu</h4>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Container className="text-center">
                                    <Row>
                                        <Col>
                                            <h5 className="menu-list menu-calculator">
                                                <Link className="menu-link" to="/calculator"><AiOutlineCalculator /> Calculator</Link>
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-2">
                                            <h5 className="menu-list menu-discount">
                                                <Link className="menu-link" to="/discount"><AiOutlinePercentage /> Discount</Link>
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-2">
                                            <h5 className="menu-list menu-exponent">
                                                <Link className="menu-link" to="/exponent"><AiOutlineFieldNumber /> Exponent</Link>
                                            </h5>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            <Modal.Footer className="justify-content-center">
                            <Button className="menu-close shadow-none" variant="light" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    <Col className="image-wrapper text-center">
                        <img width="80%" src={Blogging} alt="Mathducation" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;