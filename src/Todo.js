import React, { useState }  from "react";

function TodosComponent() {
    const [currentTodo, setCurrentTodo] = useState("");
    const [todos, setTodos] = useState([
        {
          todo: "bake a cake",
          isCompleted: true
        },
        {
          todo: "go for a walk",
          isCompleted: false
        },
        {
          todo: "contribute a web development tutorial on Enlight",
          isCompleted: false
        }
      ]);

      function createNewTodo( currentTodo ){
        let todosArray = [...todos];
        todosArray.push({
            todo: currentTodo,
            isCompleted: false
        })
        setTodos(todosArray);
      }
  return (
    <div>
        <input 
            className="todo-input"
            value = {currentTodo}
            onChange = { e=> {
                setCurrentTodo(e.target.value)
            }}
            onKeyPress = {e=>{
                if(e.key === 'Enter'){
                    createNewTodo(currentTodo);
                    setCurrentTodo('');
                }
            }}

            placeholder="Input anything"

        />
      {todos.map((todo, index) => (
          <p> { todo.todo } </p>
      ))}

      <b>{todos.length > 0 && `${todos.length} items`}</b>
    </div>
  );
}

export default TodosComponent;