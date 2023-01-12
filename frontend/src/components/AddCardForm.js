import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const AddCardForm = (props) => {
    return (
        <Container className='mt-2'>
            <Row>
                <Col>
                    <h4>Add</h4>
                    {props.message}
                    <Form className="submitForm" onSubmit={props.handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                id="nameInput"
                                value={props.newName}
                                placeholder="Name"
                                onChange={props.handleChange}
                                data-testid="nameInput"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Card Number:</Form.Label>
                            <Form.Control
                                type="number"
                                id="numberInput"
                                value={props.newCardNumber}
                                placeholder="Card number"
                                onChange={props.handleChange}
                                data-testid="numberInput"
                            />
                        </Form.Group>
                            <Form.Group>
                            <Form.Label>Limit:</Form.Label>
                            <Form.Control
                                type="number"
                                id="limitInput"
                                value={props.newLimit}
                                placeholder="Card Limit"
                                onChange={props.handleChange}
                                data-testid="limitInput"
                            />
                        </Form.Group>
                        <Button variant="primary" data-testid="form"  type="submit" className="mb-4 mt-4">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddCardForm;