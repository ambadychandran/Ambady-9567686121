import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
    it('renders the Navbar, AddCardFormContainer, and CardListContainer', () => {
        const { getByText } = render(<App />);
        const navbarBrand = getByText('Credit card system');
        const addCardFormContainer = getByText('Add');
        const cardListContainer = getByText('Existing Cards');
        expect(navbarBrand).toBeInTheDocument();
        expect(addCardFormContainer).toBeInTheDocument();
        expect(cardListContainer).toBeInTheDocument();
    });
});