import { Card } from '../../components/exports';
import styles from './CardsContainer.module.css';

const CardsContainer = () => {
  return (
    <section className={styles.cardsCont}>
      <Card />
    </section>
  );
};

export default CardsContainer;
