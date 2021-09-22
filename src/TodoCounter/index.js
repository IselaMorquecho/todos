import React from "react";
import './TodoCounter.css';
import {TodoContext} from "../TodoContext";

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <h1 className="TodoCounter">PA'Q NO SE TE OLVIDE</h1>
            <h3 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h3>
        </React.Fragment>

    );
}

export {TodoCounter};