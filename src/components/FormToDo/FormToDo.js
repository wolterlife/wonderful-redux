import React, { useState } from 'react';
import styles from './FormToDo.module.css';

const FormToDo = props => {
  const [inpVal, changeInpVal] = useState('');

  const submitFoo = e => {
    e.preventDefault();
    props.addFoo(inpVal);
    changeInpVal('');
  };

  return (
    <form onSubmit={submitFoo} className={styles.form}>
      <input
        onChange={e => changeInpVal(e.target.value)}
        className={styles.input}
        value={inpVal}
      />
      <button type="submit" className={styles.button}>Добавить задачу</button>
    </form>
  );
};

export default FormToDo;
