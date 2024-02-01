import React from 'react';
import './Card.css';

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className='card'>
        {/* <img /> */}
        <div className='details'>
            <h2 className='text-3xl font-bold'>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, temporibus?</p>
    </div>
  )
}

export default Card;