import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos, loading}){
    return (
        <React.Fragment>
            <h1 className="TodoCounter">PA'Q NO SE TE OLVIDE</h1>
            <h3 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} tareas</h3>
        </React.Fragment>

    );
}

export {TodoCounter};