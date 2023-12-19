import styles from './CardsContainer.module.css';

interface CardsProps {
  creditCard: {
    name: string;
    cardNumber: string;
    expM: string;
    expY: string;
    cvc: string;
  };
}

const CardsContainer = ({ creditCard }: CardsProps) => {
  return (
    <section className={styles.cardsCont}>
      <div className={styles.background}>
        <div className={styles.cards}>
          <div className={styles.frontCard}>
            <img src='./images/card-logo.svg' alt='' />
            <p className={styles.cardNum}>
              {creditCard.cardNumber == ''
                ? '0000 0000 0000 0000'
                : creditCard.cardNumber}
            </p>
            <p className={styles.name}>
              {creditCard.name == '' ? 'Jane Appleseed' : creditCard.name}
            </p>
            <div className={styles.expDate}>
              <p>
                <span>{creditCard.expM == '' ? '00' : creditCard.expM}</span> /{' '}
                <span>{creditCard.expY == '' ? '00' : creditCard.expY}</span>
              </p>
            </div>
          </div>
          <div className={styles.backCard}>
            <p className={styles.cvc}>
              {creditCard.cvc == '' ? '000' : creditCard.cvc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;
