import React, {PropTypes} from 'react';

function TodoFooter(props) {

    function removeCompleted() {
        const completedTodoLabels = props.todos.filter((item) => item.completed).map((item) => item.label);
        props.removeTodos(completedTodoLabels);
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{props.todos.filter((item) => !item.completed).length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/">All</a>
                </li>
                <li>
                    <a href="#/active">Active</a>
                </li>
                <li>
                    <a href="#/completed">Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={removeCompleted}>Clear completed</button>
        </footer>
    );
};

TodoFooter.propTypes = {};
TodoFooter.defaultProps = {};

export default TodoFooter;