import React from 'react'
import Card from '../card/Card';

interface Props {}

const CardList = (props: Props) => {
  return (
    <Card companyName='Apple' ticker='AAPL' price={100}/>
  )
}

export default CardList;