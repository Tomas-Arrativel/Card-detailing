import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  cardHolder: string;
  cardNumber: string;
  expDateM: string;
  expDateY: string;
  cvc: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label>Cardholder Name</label>
        <input
          className={errors.cardHolder ? styles.errorInp : ''}
          {...register('cardHolder', {
            required: { value: true, message: 'A name is required' },
          })}
          type='text'
          placeholder='e.g. Jane Appleseed'
        />
        {errors.cardHolder && (
          <p className={styles.error}>{errors.cardHolder.message}</p>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label>Card Number</label>
        <input
          className={errors.cardNumber ? styles.errorInp : ''}
          {...register('cardNumber', {
            required: { value: true, message: 'A card number is required' },
            minLength: {
              value: 16,
              message: 'Please enter a valid card number',
            },
            maxLength: {
              value: 16,
              message: 'Please enter a valid card number',
            },
            pattern: {
              value: /^[0-9]+$/,
              message: 'Wrong format, numbers only',
            },
          })}
          type='text'
          placeholder='e.g. 1234 5678 9012 0000'
        />
        {errors.cardNumber && (
          <p className={styles.error}>{errors.cardNumber?.message}</p>
        )}
      </div>
      <div className={styles.expNCvc}>
        <div className={styles.inputContainer}>
          <label>Exp. date (MM/YY)</label>
          <div className={styles.monthNYear}>
            <input
              type='text'
              placeholder='MM'
              maxLength={2}
              {...register('expDateM', { required: true })}
            />
            <input
              type='text'
              placeholder='YY'
              maxLength={2}
              {...register('expDateY', { required: true })}
            />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label>CVC</label>
          <input
            {...register('cvc', { required: true })}
            className={styles.cvcInp}
            type='text'
            placeholder='e.g. 123'
            maxLength={3}
          />
        </div>
      </div>
      <input type='submit' value='Confirm' className={styles.btn} />
    </form>
  );
};

export default Form;
