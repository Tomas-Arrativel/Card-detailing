import { useState } from 'react';
import styles from './Form.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  cardHolder: string;
  cardNumber: string;
  expDateM: string;
  expDateY: string;
  cvc: string;
};

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

const Form = ({ creditCard, setCreditCard }: CardsProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [isActive, setIsActive] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => setIsActive(true);

  const onFormChange = () => {
    let inputValue = watch('cardNumber');
    inputValue = inputValue.replace(/\s/g, '');
    inputValue = inputValue.replace(/(.{4})/g, '$1 ');

    setCreditCard({
      name: watch('cardHolder'),
      cardNumber: inputValue,
      expM: watch('expDateM'),
      expY: watch('expDateY'),
      cvc: watch('cvc'),
    });
  };

  return (
    <>
      <form
        className={isActive ? styles.hidden : styles.form}
        onSubmit={handleSubmit(onSubmit)}
        onChange={onFormChange}
      >
        <div className={styles.inputContainer}>
          <label>Cardholder Name</label>

          <input
            className={errors.cardHolder ? styles.errorInp : ''}
            {...register('cardHolder', {
              required: { value: true, message: 'A name is required' },
              minLength: { value: 4, message: 'A name is required' },
            })}
            type='text'
            placeholder='e.g. Jane Appleseed'
            maxLength={25}
          />

          {errors.cardHolder && (
            <p className={styles.error}>{errors.cardHolder.message}</p>
          )}
        </div>
        <div className={styles.inputContainer}>
          <label>Card Number</label>

          <input
            className={errors.cardNumber ? styles.errorInp : ''}
            value={creditCard.cardNumber}
            {...register('cardNumber', {
              required: { value: true, message: 'A card number is required' },
              minLength: {
                value: 20,
                message: 'Please enter a valid card number',
              },
              maxLength: {
                value: 20,
                message: 'Please enter a valid card number',
              },
              pattern: {
                value: /^[0-9\s]+$/,
                message: 'Wrong format, numbers only',
              },
            })}
            type='text'
            placeholder='e.g. 1234 5678 9012 0000'
            maxLength={20}
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
                className={errors.expDateM ? styles.errorInp : ''}
                type='text'
                min={1}
                max={12}
                placeholder='MM'
                maxLength={2}
                {...register('expDateM', {
                  required: { value: true, message: "Can't be blank" },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Wrong format, numbers only',
                  },
                  max: { value: 12, message: "This month doesn't exist" },
                  min: { value: 1, message: "This month doesn't exist" },
                })}
              />

              <input
                className={errors.expDateY ? styles.errorInp : ''}
                type='text'
                placeholder='YY'
                maxLength={2}
                {...register('expDateY', {
                  required: { value: true, message: "Can't be blank" },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Wrong format, numbers only',
                  },
                  minLength: {
                    value: 2,
                    message: 'Please enter a valid Year',
                  },
                })}
              />
            </div>
            {errors.expDateM || errors.expDateY ? (
              <p className={styles.error}>
                {errors.expDateM?.message || errors.expDateY?.message}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className={styles.inputContainer}>
            <label>CVC</label>

            <input
              className={
                errors.cvc
                  ? `${styles.errorInp} ${styles.cvcInp}`
                  : styles.cvcInp
              }
              {...register('cvc', {
                required: { value: true, message: "Can't be blank" },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Wrong format, numbers only',
                },
                minLength: { value: 3, message: 'Please enter a valid CVC' },
              })}
              type='text'
              placeholder='e.g. 123'
              maxLength={3}
            />

            {errors.cvc && (
              <p className={styles.error}>{errors.cvc?.message}</p>
            )}
          </div>
        </div>
        <input type='submit' value='Confirm' className={styles.btn} />
      </form>
      <div className={isActive ? styles.complete : styles.hidden}>
        <img src='./images/icon-complete.svg' alt='complete icon' />
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button className={styles.btn} onClick={() => setIsActive(false)}>
          Continue
        </button>
      </div>
    </>
  );
};

export default Form;
