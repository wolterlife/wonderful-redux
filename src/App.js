import React, { useState } from 'react';
import FormToDo from './components/FormToDo';
import ListToDo from './components/ListToDo';

function App() {
  const [listOfTask, setListOfTask] = useState(['r', 'o', 'b', 'o', 't']);

  const addTask = (task) => {
    if (task) {
      setListOfTask((list) => {
        return [
          ...list, task
        ];
      });
    }
  };

  const removeTask = (task) => {
    setListOfTask(list => {
      return list.filter(listOfTask => listOfTask !== task);
    });
  };

  return (
    <div className="App">
      <FormToDo listOfTask={listOfTask} addFoo={addTask}/>
      <ListToDo listOfTask={listOfTask} removeFoo={removeTask}/>
    </div>
  );
}

export default App;
