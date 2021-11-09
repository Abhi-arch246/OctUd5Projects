import React, { useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [newtodo, setnewtodo] = useState('')
  const [todos, settodos] = useState([])

  const submitTodo = () => {
    settodos([...todos, newtodo]);
    setnewtodo("")
  }

  const something = (event) => {
    if (event.keyCode === 13) {
      submitTodo()
    }
  }

  const deleteTodo = (key) => {
    var otherArray = [...todos]
    otherArray.splice(key, 1)
    settodos(otherArray)
  }


  const todolist = todos.map((singletodo, key) => {

    return (
      <div className="mt-4 row">
        <h2 className="col-md-8">{key + 1}. {singletodo}</h2>
        <button onClick={() => { deleteTodo(key) }} className="col-md-1 btn btn-danger btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg></button>
      </div>
    )
  })

  return (
    <div className="container App">
      <h1 className="m-4">A's ToDo List</h1>
      <h3>Number of tasks :<span class="badge badge-light"> {todos.length}</span></h3>
      <div className="row justify-content-center">
        <input type="text" value={newtodo} placeholder="What to do.." className="m-4 form-control col-md-6" onChange={(e) => setnewtodo(e.target.value)} onKeyDown={(e) => something(e)} />

        <button onClick={submitTodo} className="btn btn-primary col-md-2 mb-3"> Add to ToDo</button>
        {todos.length ?
          (<>
            <h2><span className="badge badge-primary">Tasks to be Done are displayed below</span></h2>
            {todolist}
          </>) : (<>
            <h2><span className="badge badge-primary">No Tasks to be Done as of now :(</span></h2>
          </>)}

      </div>
    </div>
  );
}

export default App;
