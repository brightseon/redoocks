import React, { useState, useContext } from 'react';
import { ADD } from './reducer';
import { useDispatch } from './context';

export default  () => {
    const [newToDo, setNewToDo] = useState('');
    const dispatch = useDispatch();

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
        <form onSubmit={ onSubmit }>
            <input value={ newToDo } type="text" placeholder="Write to do" onChange={ onChange } />
        </form>
    );
};