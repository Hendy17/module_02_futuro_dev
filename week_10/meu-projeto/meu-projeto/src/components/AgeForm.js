import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.css';

const AgeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>Nome</label>
        <input
          name="name"
          {...register('name', { required: true })}
        />
        {errors.name && <p className={styles.errorMessage}>Nome é obrigatório.</p>}
      </div>
      
      <div>
        <label>Email</label>
        <input
          name="email"
          {...register('email', {
            required: "Email é obrigatório.",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Email inválido."
            }
          })}
        />
        {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}
      </div>
      
      <div>
        <label>Idade</label>
        <input
          type="number"
          name="age"
          {...register('age', { required: true, min: 18 })}
        />
        {errors.age && <p className={styles.errorMessage}>A idade mínima é 18 anos.</p>}
      </div>
      
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default AgeForm;
