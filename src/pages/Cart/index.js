import React from 'react';
import Header from './components/header';
import Details from './components/details';



export default function Cart({ header, details }) {
    return (
        <>
            <Header {...header} />
            <Details {...details} />
        </>
    )
}
