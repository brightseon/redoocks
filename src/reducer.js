import uuid from 'uuid/v4';
import { ADD, DEL, COMPLETE, UNCOMPLETE } from './actions';

export const initialState = {
    toDos : [],
    completed : []
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD : 
            return { ...state, toDos : [...state.toDos, { id : uuid(), text : action.payload }] };             // anti mutation

        case DEL : 
            return { ...state, toDos : state.toDos.filter(toDo => toDo.id !== action.payload) };

        case COMPLETE :
            const target = state.toDos.find(toDo => toDo.id === action.payload);
            return { 
                ...state, 
                toDos : state.toDos.filter(toDo => toDo.id !== action.payload),
                completed : [...state.completed, { ...target }]
            };

        case UNCOMPLETE :
            const aTarget = state.completed.find(toDo => toDo.id === action.payload);
            return { 
                ...state, 
                completed : state.completed.filter(toDo => toDo.id !== action.payload),
                toDos : [...state.toDos, { ...aTarget }]
            };

        default : 
            return;
    }
};

export default reducer;