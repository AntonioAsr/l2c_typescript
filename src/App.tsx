import React, { useState } from 'react';
import TodoListItem from './TodoListItem';

// array of object
const initialTodos: Array<Todo> = [
    { text: "learn javascript", complete: true },
    { text: "learn typescript", complete: false }
]


const App: React.FC = () => {
    const [todos, setTodos ] = useState(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
        console.log(selectedTodo)
        const newTodos = todos.map(todo => {
            if(todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                }
            }
            return todo;
        })
        setTodos(newTodos);
    }
    return (
        <>
            <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
            <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
        </>
    );
}

export default App;
