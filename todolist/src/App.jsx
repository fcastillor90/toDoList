import { useState } from "react"
import  Todoput from "./components/todoput"
import TareaItem from "./components/TareaList";

function App() {

  const [toDo, setTodo] = useState([]);

const addTarea = (nombreTarea) => {
  const nuevaTarea = {nombreTarea, checked: false };
  setTodo([...toDo, nuevaTarea]);
};

function borrarTarea(borrarNombreTarea) {
  setTodo(toDo.filter(tarea => tarea.nombreTarea !== borrarNombreTarea));
}


console.log(toDo);
  return (
    <>
      <div className="container">
        <h1>To do List</h1>

        <Todoput addTarea={addTarea}/>

        <div className="toDo">
          <span>To Do </span>
          <ul className="list-items">
            {toDo.map((tarea, key) => (
              <TareaItem tarea={tarea} key={key} borrarTarea={borrarTarea} />
            ))}
          </ul>

              {toDo.length === 0 ? (
                <p className="notify">Its Done! Great!</p>
              ) : null }

        </div>
      </div>
    </>
  )
}

export default App
