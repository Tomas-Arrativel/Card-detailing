import { Form } from '../../components/exports';
import styles from './FormContainer.module.css';

interface CardsProps {
  creditCard: {
    name: string;
    cardNumber: string;
    expM: string;
    expY: string;
    cvc: string;
  };
  setCreditCard: any;
}

const FormContainer = ({ creditCard, setCreditCard }: CardsProps) => {
  return (
    <section className={styles.formCont}>
      <Form creditCard={creditCard} setCreditCard={setCreditCard} />
    </section>
  );
};

export default FormContainer;
