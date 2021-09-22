import React from 'react';
import {TodoContext} from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {Modal} from '../Modal';
import {TodoForm} from "../Form";
import './Container.css'
import {MyLoader} from "../Loading/MyLoader";

function AppUI() {
    return (
        <div className={'Container'}>
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {({
                      error,
                      loading,
                      searchedTodos,
                      completeTodo,
                      deleteTodo,
                      openModal,
                      setOpenModal
                  }) => (
                    <React.Fragment>
                        <TodoList>
                            {error && <p>Desespérate, hubo un error...</p>}
                            {loading && <MyLoader />}
                            {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                            {searchedTodos.map(todo => (
                                <TodoItem
                                    key={todo.text}
                                    todo={todo}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo)}
                                    onDelete={() => deleteTodo(todo)}
                                />
                            ))}
                        </TodoList>
                        {
                            openModal &&
                            <Modal>
                                <TodoForm/>
                            </Modal>
                        }
                        <CreateTodoButton
                            setOpenModal = {setOpenModal}
                        />
                    </React.Fragment>

                )}
            </TodoContext.Consumer>
        </div>
    );
}

export {AppUI};