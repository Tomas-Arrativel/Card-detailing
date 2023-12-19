import { useState } from 'react';
import './App.css';
import { CardsContainer, FormContainer } from './containers/exports';

function App() {
  const [creditCard, setCreditCard] = useState({
    name: '',
    cardNumber: '',
    expM: '',
    expY: '',
    cvc: '',
  });

  return (
    <main>
      <CardsContainer creditCard={creditCard} />
      <FormContainer creditCard={creditCard} setCreditCard={setCreditCard} />
    </main>
  );
}

export default App;
