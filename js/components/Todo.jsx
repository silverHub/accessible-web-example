import React, {Component, PropTypes} from 'react';
import Header from './Header'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import Footer from './Footer'

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [this.createTodo('a'), this.createTodo('b'), this.createTodo('c'), this.createTodo('trat')]
        }
    }

    createTodo = (label) => {
        return {
            label,
            completed: false
        }
    }

    addTodo = (todoLabel) => {
        this.setState((prevState) => {
            let newState = Object.assign({}, prevState);
            newState.list.push(this.createTodo(todoLabel));
        });

    }

    toggleTodo = (label) => {
        let newList = Object.assign({}, this.state).list;
        this.setState({
            list: newList.map((item) => {
                if (item.label === label) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    }


    removeTodo = (label) => {
        this.removeTodos([label]);
    }
    removeTodos = (labels) => {
        let newList = Object.assign({}, this.state).list;
        this.setState({list: newList.map((item) => labels.includes(item.label) ? null : item).filter((item) => !!item)});
    }

    render() {
        return (
            <div>
                <Header addTodo={this.addTodo}/>
                <TodoList todos={this.state.list} removeTodo={this.removeTodo} toggleTodo={this.toggleTodo}/>
                <TodoFooter todos={this.state.list} removeTodos={this.removeTodos}/>
                <Footer/>
            </div>
        );
    }
}

Todo.propTypes = {};
Todo.defaultProps = {};

export default Todo;