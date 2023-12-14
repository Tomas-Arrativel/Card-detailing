import './App.css';
import { CardsContainer, FormContainer } from './containers/exports';

function App() {
  let cardNum = '',
    name = '',
    expM = '',
    expY = '',
    cvc = '';
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
