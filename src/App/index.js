import React from 'react';
import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../Form";
import { MyLoader } from "../Loading/MyLoader";
import { Header } from "../Header";
import './Container.css'
import { TodosError } from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import {ChangeAlertWithStorageListener} from "../ChangeAlert";
 

function App() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue, setSearchValue,
        addTodo,
        sincronizeTodos
    } = useTodos();

    return (
        <div className={'Container'}>
            <Header loading={loading}>
                <TodoCounter 
                        totalTodos={totalTodos} 
                        completedTodos={completedTodos}
                    />
                 
                <TodoSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue} 
                />
            </Header>

            <React.Fragment>
                <TodoList
                    error = {error}
                    loading = {loading}
                    searchedTodos = {searchedTodos}
                    totalTodos = {totalTodos}
                    onError = {() => <TodosError/>}
                    onLoading = { () => <MyLoader />}
                    onEmptyTodos = {() => <EmptyTodos/>}
                    onEmptySearchResult = {()=> <p>No hay resultados para {searchValue}</p>}
                   /* render = {todo => (
                        <TodoItem
                            key={todo.text}
                            todo={todo}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo)}
                            onDelete={() => deleteTodo(todo)}
                        />
                    )}*/
                >
                   {
                    todo => (
                        <TodoItem
                            key={todo.text}
                            todo={todo}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo)}
                            onDelete={() => deleteTodo(todo)}
                        />
                    )}
                </TodoList>
                {
                    openModal &&
                    <Modal>
                        <TodoForm
                            addTodo={addTodo}
                            setOpenModal={setOpenModal}
                        />
                    </Modal>
                }
                <CreateTodoButton
                    setOpenModal={setOpenModal}
                />

                <ChangeAlertWithStorageListener 
                    sincronize = {sincronizeTodos}
                />
            </React.Fragment>

        </div>
    );
}
export default App;