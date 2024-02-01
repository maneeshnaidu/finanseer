import React from 'react';
import './Card.css';

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = (props: Props) => {
  return (
    <div className='card'>
        {/* <img /> */}
        <div className='details'>
            <h2 className='text-3xl font-bold underline'>AAPL</h2>
            <p>$110.00</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, temporibus?</p>
    </div>
  )
}

export default Card;