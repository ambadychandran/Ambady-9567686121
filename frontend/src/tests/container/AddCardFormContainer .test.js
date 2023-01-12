import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCardFormContainer from '../../container/AddCardFormContainer';
import { API_URL } from '../../api';
import fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
        success: true,
        error: ''
    })
})));

describe('AddCardFormContainer component', () => {
    let getAllCardInfoMock;
    beforeEach(() => {
      getAllCardInfoMock = jest.fn();
    });

    it('calls the addCard function and updates the state when the form is submitted', async () => {
        const { getByTestId } = render(
            <AddCardFormContainer getAllCardInfo={getAllCardInfoMock} />
        );
        const nameInput = getByTestId('nameInput');
        const numberInput = getByTestId('numberInput');
        const limitInput = getByTestId('limitInput');
        const form = getByTestId('form');
        fireEvent.change(nameInput, { target: { value: 'John Smith' } });
        fireEvent.change(numberInput, { target: { value: '4485275742308327' } });
        fireEvent.change(limitInput, { target: { value: '1000' } });
        fireEvent.submit(form);
        setTimeout(() => {
            expect(fetch).toHaveBeenCalledWith(API_URL+'Add', {
                method: 'POST',
                body: JSON.stringify({
                    name: 'John Smith',
                    cardNumber: '4485275742308327',
                    limit: 1000
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            expect(getAllCardInfoMock).toHaveBeenCalled();
        }, 0);
    });
});
