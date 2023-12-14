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
  cardNum: string;
  name: string;
  expM: string;
  expY: string;
  cvc: string;
}

const Form = ({ cardNum, name, expM, expY, cvc }: CardsProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  name = watch('cardHolder');
  cardNum = watch('cardNumber');
  expM = watch('expDateM');
  expY = watch('expDateY');
  cvc = watch('cvc');

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
                minLength: { value: 2, message: 'Please enter a valid Year' },
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
              errors.cvc ? `${styles.errorInp} ${styles.cvcInp}` : styles.cvcInp
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
          {errors.cvc && <p className={styles.error}>{errors.cvc?.message}</p>}
        </div>
      </div>
      <input type='submit' value='Confirm' className={styles.btn} />
    </form>
  );
};

export default Form;
