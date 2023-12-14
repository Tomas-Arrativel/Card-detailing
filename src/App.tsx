import './App.css';
import { CardsContainer, FormContainer } from './containers/exports';

function App() {
  let cardNum = '0000 0000 0000 0000',
    name = 'Jane Appleseed',
    expM = '00',
    expY = '00',
    cvc = '000';
  return (
    <main>
      <CardsContainer
        cardNum={cardNum}
        name={name}
        expM={expM}
        expY={expY}
        cvc={cvc}
      />
      <FormContainer
        cardNum={cardNum}
        name={name}
        expM={expM}
        expY={expY}
        cvc={cvc}
      />
    </main>
  );
}

export default App;
