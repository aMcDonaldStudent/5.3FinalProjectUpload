import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from './Button';

import TextField from './TextField';

import SquareCanvas from './SquareCanvas';


 function App() {

    const [countTom, setCountTom] = useState(0);
    const [orderStatus, setOrderStatus] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [showSquare, setShowSquare] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
  
    
     const handleChange = (e) => {
       setInputValue(e.target.value);
       
     }
	
     const handleIncrementTom = () => {
        setCountTom(countTom + 1);
	setShowSquare(true);
	setShowLabel(true);
	
    };

   const handleResetTom = () => {
        setCountTom(0);
    };

    const [countPot, setCountPot] = useState(0);

     const handleIncrementPot = () => {
        setCountPot(countPot + 1);
	setShowSquare(true);
	setShowLabel(true);
	
    };

   const handleResetPot = () => {
        setCountPot(0);
	
    };
   const handleResetAll = () => {
        setCountPot(0);
        setCountTom(0);
	setOrderStatus('');
	setInputValue('');
	setShowSquare(false);
	setShowLabel(false);
    };
    
    const handleOrder = () => {
        if ((countPot > 1 || countTom > 1) && inputValue !== '') {
	   setOrderStatus('Your Order has been placed');
	}
	else if (countTom === 0 && countPot === 0) {
	   setOrderStatus('You must select items to order');
	}
	else {
	   setOrderStatus('You must enter an address to order');
	}
    };
 return (

 <div className="App">
    <header className="App-header">
    <h2>Welcome to our online produce storefront!</h2>
    <img src={logo} className="App-logo" alt="logo" />
    <p> Product selection (Tomatoes or Potatoes)</p>

    <h1>Tomatoes: {countTom} &nbsp;
    <Button label="Add Tomato" onClick={handleIncrementTom} /> &nbsp;
    
    Potatoes: {countPot} &nbsp;
    <Button label="Add Potato" onClick={handleIncrementPot} /> &nbsp;
    
    </h1>
    <Button label = "Reset Order" onClick={handleResetAll} />
   	

    <h3>Please enter delivery address below</h3>  
    <h2>{inputValue}</h2>
    <TextField value={inputValue} onChange={handleChange} />
    {/*<h4> Your current order is: &nbsp;
	{countTom} Tomatoes, &nbsp;
	{countPot} Potatoes.
    </h4>*/}
    <Button label = "Submit Order" onClick={handleOrder} />
    <div>
    <h3 id='orderStatus'> {orderStatus}</h3>
    </div>
  
    {/*  <Button label = "Reset Order" onClick={handleResetAll} />  */}
    
    
    {showSquare && (
 	<div style={{ position: 'relative', display: 'inline-block' }}>
 		<SquareCanvas />
 		{showLabel && ( 
		   <div style={{ 
			position: 'absolute', 
			top: 20,
			left: 0,
			width: '100%', 
			height: '100%',
			textAlign: 'center',
			color: 'white', 
			
			padding: '2px', 
			boxSizing: 'border-box'
		   }}> 
			Valid order! 
		   </div>
	        )}
    </div> 
)}
    

    </header>
	
    <footer> Alex McDonald</footer>
 </div>

 );
}

export default App;

