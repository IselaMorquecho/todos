import React from 'react';
import './TodoItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
    const onComplete = () => {
        props.onComplete(props.todo);
    }
    const onDelete = () => {
        props.onDelete(props.todo);
    }
    return (
        <li className="TodoItem">
            <input className={'TodoItem-check'} type={"checkbox"} checked={props.todo.completed} value={props.todo.completed} onChange={onComplete}/>
            <p className={`TodoItem-p ${props.todo.completed && 'TodoItem-p--complete'}`}>
                    {props.todo.text}
                </p>
            <IconButton aria-label="delete" className="Icon-delete" onClick={onDelete}>
                <DeleteIcon />
            </IconButton>

        </li>
    );
}

export {TodoItem};