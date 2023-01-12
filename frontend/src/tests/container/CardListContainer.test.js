import React from 'react';
import { render } from '@testing-library/react';
import CardListContainer from '../../container/CardListContainer';

describe('CardListContainer component', () => {
    it('renders the list of items', () => {
        const items = [
            { name: 'John Smith', cardNumber: '4485275742308327', limit: 1000, cardId:1 ,balance:0},
            { name: 'Jane Doe', cardNumber: '4485275742308328', limit: 2000, cardId:2 ,balance:0}
        ];
        const { getByText } = render(<CardListContainer items={items} />);
        const card1 = getByText('John Smith');
        const card2 = getByText('Jane Doe');
        expect(card1).toBeInTheDocument();
        expect(card2).toBeInTheDocument();
    });
});
