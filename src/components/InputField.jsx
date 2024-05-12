import React from 'react';

const InputField = ({text, setText, addTodo}) => {
    return (
        <label>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)}/>
            <button onClick={addTodo}>add todo</button>
        </label>
    );
};

export default InputField;