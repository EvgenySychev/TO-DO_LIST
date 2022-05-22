import {FilterValuesType, TodolistType} from "../App";


export const todolistsReducer = (state: Array<TodolistType>, action: tsarTypeForTodolistReducer) => {
    switch (action.type) {
        case "REMOVE-TODOLIST"  : {
            return state.filter(el => el.id !== action.payload.todolistId1)
        }
        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = {id: action.payload.id, title: action.payload.title, filter: 'all'};
            return [...state,newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE' : {
            return state.map(el =>el.id === action.payload.todolistID2 ? {...el,title:action.payload.newTodolistTitle} : el)
        }
        case 'CHANGE-TODOLIST-FILTER' : {
            return state.map(el => el.id===action.payload.id ? {...el,filter:action.payload.filter} : el)
        }
        default:
            return state
    }
}

export type tsarTypeForTodolistReducer = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeFilterACType

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistId1}
    } as const
}

type addTodolistACType=ReturnType<typeof addTodolistAC>

export const addTodolistAC = (id:string,title:string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            id,
            title
        }
    } as const
}
export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (todolistID2:string,newTodolistTitle:string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistID2, newTodolistTitle
        }
    }
}
export type changeFilterACType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (id:string,filter:FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            id, filter
        }
    }
}
