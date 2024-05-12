import './App.css';
import React from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {Provider} from "react-redux";


function App() {
    const [todos, setTodos] = React.useState([]);
    const [text, setText] = React.useState("");


    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText("")
        }
    }

    const toggleTodoCompleted = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo;

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            )
        )
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return (
        <div className="App">
            <InputField
                text={text}
                addTodo={addTodo}
                setText={setText}
            />

            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodoCompleted={toggleTodoCompleted}
            />
        </div>
    );
}

export default App;
