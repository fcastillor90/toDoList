import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const TareaItem = ({ tarea, borrarTarea }) => {
  return (
    <li className="items">
      <div className="items-text">
        <input type="checkbox" />
        <p>{tarea.nombreTarea} </p>
      </div>
      <RiDeleteBin7Line
        className="delete-icon"
        onClick={() =>  borrarTarea(tarea.nombreTarea)}
      />
    </li>
  );
};
export default TareaItem;

RiDeleteBin7Line;
