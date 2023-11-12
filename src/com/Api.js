import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1 className='todo-list'>Todo List</h1>
      <ul className='ul'>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handlePreviousPage} className='but1'>Précédent</button>
      <button onClick={handleNextPage} className='but2'>Suivant</button>
    </div>
  );
}

export default Api;

