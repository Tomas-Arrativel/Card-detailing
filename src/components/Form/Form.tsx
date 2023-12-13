import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <label>Cardholder Name</label>
        <input type='text' placeholder='e.g. Jane Appleseed' />
      </div>
      <div className={styles.inputContainer}>
        <label>Card Number</label>
        <input type='text' placeholder='e.g. 1234 5678 9012 0000' />
      </div>
      <div>
        <div className={styles.inputContainer}>
          <label>Exp. date (MM/YY)</label>
          <input type='text' placeholder='MM' />
          <input type='text' placeholder='YY' />
        </div>
        <div className={styles.inputContainer}>
          <label>CVC</label>
          <input type='text' placeholder='e.g. 123' />
        </div>
      </div>
      <input type='submit' value='Confirm' className={styles.btn} />
    </form>
  );
};

export default Form;
