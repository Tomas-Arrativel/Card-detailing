import { Form } from '../../components/exports';
import styles from './FormContainer.module.css';

interface CardsProps {
  cardNum: string;
  name: string;
  expM: string;
  expY: string;
  cvc: string;
}

const FormContainer = ({ cardNum, name, expM, expY, cvc }: CardsProps) => {
  return (
    <section className={styles.formCont}>
      <Form cardNum={cardNum} name={name} expM={expM} expY={expY} cvc={cvc} />
    </section>
  );
};

export default FormContainer;
