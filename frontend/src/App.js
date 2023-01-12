import React, { useState, useEffect } from 'react';
import AddCardFormContainer from './container/AddCardFormContainer';
import CardListContainer from './container/CardListContainer';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { API_URL } from './api';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllCardInfo();
    }, []);

    const getAllCardInfo = () => {
        fetch(API_URL+'GetAll')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Credit card system</Navbar.Brand>
                </Container>
            </Navbar>
            <AddCardFormContainer
                getAllCardInfo={getAllCardInfo}
            />
            <CardListContainer items={items} />
        </div>
    );
};

export default App;

