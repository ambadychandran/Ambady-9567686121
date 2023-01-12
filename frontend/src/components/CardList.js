import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const CardList = (props) => {
    return (
        <div>
            <Container>
                <h4>Existing Cards</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Card Number</th>
                            <th>Balance</th>
                            <th>Limit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.items.map(item =>
                        (
                        <tr key={item.cardId}>
                            <td>{item.name}</td>
                            <td>{item.cardNumber}</td>
                            <td>{item.balance}</td>
                            <td>{item.limit}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

export default CardList;
