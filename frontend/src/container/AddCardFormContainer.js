import React, { useState } from 'react';
import AddCardForm from '../components/AddCardForm';
import { API_URL } from '../api';
import Alert from 'react-bootstrap/Alert';

const AddCardFormContainer = (props) => {
    const [newName, setNewName] = useState('');
    const [newCardNumber, setNewCardNumber] = useState('');
    const [newLimit, setNewLimit] = useState(0);
    const [successfullyAdded, setSuccessfullyAdded] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addCard(newName, newCardNumber, newLimit);
        props.getAllCardInfo();
    };

    const addCard = async (newName, newNumber, newLimit) => {
        await fetch(API_URL+'Add', {
            method: 'POST',
            body: JSON.stringify({
                name: newName,
                cardNumber: newNumber,
                limit: newLimit
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                setSuccessfullyAdded(true)
            } else {
                setSuccessfullyAdded(false)
            }
            setErrorMessage(data.error);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    const handleChange = (event) => {
        if (event.target.id === 'nameInput') {
            setNewName(event.target.value);
        } else if (event.target.id === 'numberInput') {
            setNewCardNumber(event.target.value);
        } else {
            setNewLimit(event.target.value);
        }
    };

    let message;
    if (!successfullyAdded) {
        message = <Alert variant="danger">
                    {errorMessage}
                </Alert>
    }

    return (
        <AddCardForm
            newName={newName}
            newCardNumber={newCardNumber}
            newLimit={newLimit}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            message={message}
        />
    );
};

export default AddCardFormContainer;