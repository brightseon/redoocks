import React from 'react';
import { COMPLETE, UNCOMPLETE, DEL } from '../actions';
import { useDispatch } from '../context';

export default ({ text, id, isCompleted }) => {
    const dispatch = useDispatch();

    return (
        <li key={ id }>
            <span>{ text }</span>
            <span role="img" aria-label="" onClick={ () => dispatch({ type : DEL, payload : id }) }>❌</span>
            <span role="img" aria-label="" onClick={ () => dispatch({ type : isCompleted ? UNCOMPLETE : COMPLETE, payload : id }) }>
                { isCompleted ? '‍ 🙅🏼‍♂️' : '✅' }
            </span>
        </li>
    )
};