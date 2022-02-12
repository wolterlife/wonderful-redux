import React from 'react';
import styles from './ListToDo.module.css';

const ListToDo = ({
  listOfTask,
  removeFoo
}) => {

  const res = listOfTask.map(item =>
    <div className={styles.container} key={Math.random()}>
      <p className={styles.title}>
        {item}
      </p>
      <button onClick={() => removeFoo(item)}>x</button>
    </div>
  );

  return (
    <div className={styles.list}>
      {res}
    </div>
  );
};

export default ListToDo;
