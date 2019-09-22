import React, { useReducer, useState } from 'react';
import uuid from 'uuid/v4';

const initialState = {
    toDos : []
};

const ADD = 'add';
const DEL = 'del';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD : 
            return { toDos : [...state.toDos, { id : uuid(), text : action.payload }] };             // anti mutation

        case DEL : 
            return { toDos : state.toDos.filter(toDo => toDo.id !== action.payload) };

        default : 
            return;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newToDo, setNewToDo] = useState('');
    const onSubmit = e => {
        e.preventDefault();

        dispatch({ type : ADD, payload : newToDo });
        setNewToDo('');
    };
    const onChange = e => {
        const { target : { value } } = e;

        setNewToDo(value);
    };

    return (
        <>
            <h1>Add to do</h1>
            <form onSubmit={ onSubmit }>
                <input value={ newToDo } type="text" placeholder="Write to do" onChange={ onChange } />
            </form>
            <ul>
                <h2>To Dos</h2>
                { state.toDos.map((toDo) => (
                    <li key={ toDo.id }>
                        <span>{ toDo.text }</span>
                        <button onClick={ () => dispatch({ type : DEL, payload : toDo.id }) }>❌</button>
                    </li>
                )) }
            </ul>
        </>
    );
};

export default App;
