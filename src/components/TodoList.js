import React from "react";
import {observer} from "mobx-react";
import TodoView from "./TodoView";
import waitingSign from "./loading.svg";
@observer
class TodoList extends React.Component
{
    render()
    {
        const store = this.props.store;
        return (
            <div>
                <p>{ store.report }</p>
                <p>{ store.completedTodosCount}</p>
                <ul>
                    { store.todos.map(
                        (todo, idx) => <TodoView todo={ todo } key={ idx }/>
                    ) }
                </ul>
                <div style={{height: 70}}>
                    {store.pendingRequests > 0 ? <img src={waitingSign} alt="logo"/> : null}
                </div>
                <button onClick={ this.onNewTodo }>New Todo</button>
                <button onClick={ this.onRandomTodo }>Random</button>
                <small> (double-click a todo to edit)</small>
            </div>
        );
    }

    onRandomTodo = () =>
    {
        let store = this.props.store;
        store.pendingRequests++;
        console.log("a");
        setTimeout(function ()
        {
            console.log("c");
            store.addTodo('Random Todo ' + Math.random());
            store.pendingRequests--;
        }, 2000);
        console.log("b");
    }
    onNewTodo = () =>
    {
        this.props.store.addTodo(prompt('Enter a new todo:', 'Complete Todays Exercises'));
    }
}
export default TodoList;