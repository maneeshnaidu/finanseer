import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Card companyName='Apple' ticker='AAPL' price={100} />
    </div>
  );
}

export default App;
