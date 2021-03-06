import React from "react";
import './Form.css';

function TodoForm({addTodo, setOpenModal}) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form className={'Form'} onSubmit={onSubmit}>
            <label className={'Instructions'}>Escribe un nuevo todo</label>
            <br/>
            <textarea
                placeholder={'Nueva tarea'}
                value={newTodoValue}
                onChange={onChange}
                rows={5}
            />
            <div className={"botonera"}>
                <button type={"button"}
                        onClick={onCancel}
                >
                    Cancelar
                </button>
                <button type={"submit"}

                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}