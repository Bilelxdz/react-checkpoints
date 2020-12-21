import { useState }  from 'react'
import './App.css';
import Add from './Addtodo'
import Todo from './Todo'
import Get from './GetData'

function App() {
  const [todos,setTodos]= useState([])
  console.log(todos)
  return (
    <div className="App">
      <Get />
      {<Add test={setTodos}/>}
      {todos.map((elem) => {
       return <Todo change={setTodos} data={elem} key={todos.id} />
      })}
    </div>
  );
}

export default App;
