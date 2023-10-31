import React, { useState } from "react";

const Todoput = (addTarea) => {
  const [tarea, setTarea] = useState("");

    function handleInputValue(event) {
    setTarea(event.target.value);
  }

  function handleAddTarea(event) {
    event.preventDefault();
    if (tarea.trim() === '') return;
    addTarea(tarea);
    setTarea("");
  }

  return (
    <form className="inputField" onSubmit={handleAddTarea}>
      <input
        type="text"
        value={tarea}
        placeholder="Add New Reminder"
        onChange={handleInputValue}
      />
      <button>+</button>
    </form>
  );
};

export default Todoput;
