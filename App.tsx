import React, { useState, useEffect, createElement } from 'react';
import './style.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([
    { title: 'title todo 1', description: 'description todo 1' },
    { title: 'title todo 1', description: 'description todo 1' },
  ]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setTitle('This is a new title on load');
  });

  const GenerateList = () => {
    const toDoListLen = todos.length;
    let listItems = [];
    let list = createElement('ul', null, listItems);

    for (let i = 0; i < toDoListLen; i++) {
      listItems.push(createElement('li', null, `${todos[i].title}`));
    }

    return list;
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <p>{`Some nice paragraph. Click me was hit ${count} times`}</p>
      {GenerateList()}
    </div>
  );
};

export default App;
