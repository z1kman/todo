import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    }
    return (
        <span className="todo-list-item">

            <span
                className="todo-list-item"
                style={style}>{label}
            </span>
            <button type="button"
                className="btn btn-outline-danger btn-sm">
                <i class="bi bi-trash"></i>
            </button>
            <button type="button"
                className="btn btn-outline-success btn-sm">
                <i className="bi bi-exclamation" />
            </button>


        </span>

    )
}

export default TodoListItem;