import './App.css';
import React from "react";
import {useDispatch} from "react-redux";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import {addTodo} from "./store/TodoSlice";


function App() {
    const [text, setText] = React.useState("");
    const dispatch = useDispatch();
    const addTask = ()=>{
        dispatch(addTodo({text}))
        setText("")
    }




    const toggleTodoCompleted = (todoId) => {
        // setTodos(
        //     todos.map(
        //         todo => {
        //             if (todo.id !== todoId) return todo;
        //
        //             return {
        //                 ...todo,
        //                 completed: !todo.completed
        //             }
        //         }
        //     )
        // )
    }


    return (
        <div className="App">
            <InputField
                text={text}
                addTodo={addTask}
                setText={setText}
            />

            <TodoList/>
        </div>
    );
}

export default App;
