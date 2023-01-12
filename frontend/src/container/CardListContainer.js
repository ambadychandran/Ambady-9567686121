import React from 'react';
import CardList from '../components/CardList';

const CardListContainer = (props) => {
    return (
        <CardList items={props.items} />
    )
}

export default CardListContainer;