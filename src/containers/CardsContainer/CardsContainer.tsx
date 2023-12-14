import styles from './CardsContainer.module.css';

interface CardsProps {
  cardNum: string;
  name: string;
  expM: string;
  expY: string;
  cvc: string;
}

const CardsContainer = ({ cardNum, name, expM, expY, cvc }: CardsProps) => {
  return (
    <section className={styles.cardsCont}>
      <div className={styles.background}></div>

      <div className={styles.cards}>
        <div className={styles.frontCard}>
          <img src='./images/card-logo.svg' alt='' />
          <p className={styles.cardNum}>{cardNum}</p>
          <p className={styles.name}>{name == '' ? 'Tomás Arrativel' : name}</p>
          <div className={styles.expDate}>
            <p>
              <span>{expM == '' ? '00' : expM}</span> /{' '}
              <span>{expY == '' ? '00' : expY}</span>
            </p>
          </div>
        </div>
        <div className={styles.backCard}>
          <p className={styles.cvc}>{cvc == '' ? '000' : cvc}</p>
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;
