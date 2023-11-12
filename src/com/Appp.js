
import React,{useState} from 'react';
import List from './List';
import Form from './Form';
import TodosL from './TodosL';


function Appp() {
  
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  const [editTodo,setEditodo]=useState(null);
  
  return (
    <div className="container">
      <div className="app-wrapper">
      <div>
        <List/>
      
      </div>
      <div>
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditodo={setEditodo}
      />
      </div>
      <di>
        <TodosL todos={todos} setTodos={setTodos} setEditodo={setEditodo}/>
      </di>
     </div>
     </div>
  );
}

export default Appp;
