import { TasksStateType} from '../AppWithRedux';
import {v1} from "uuid";
import {AddTodolistActionType} from "./todolists-reducer";

export type removeTasksActionType = ReturnType<typeof removeTaskAC>

export type addTaskACActionType = ReturnType<typeof addTaskAC>

export type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>

export type changeTitleStatusACType = ReturnType<typeof changeTitleStatusAC>

type ActionsType = removeTasksActionType | addTaskACActionType |  changeTaskStatusACType | changeTitleStatusACType | AddTodolistActionType;

const initialState: TasksStateType = {}

export const tasksReducer  = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASKS':
            return {
                ...state,
                [action.todolistID] : state[action.todolistID].filter(t => t.id !== action.taskID)
            }
        case 'ADD-TASKS': return {
            ...state,
            [action.todolistID] : [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistID]]}

        case 'CHANGE-STATUS-TASK':
            return {
                ...state,
                [action.todolistID] : state[action.todolistID].map(el => el.id === action.taskId ? {...el, isDone: action.isDone} : el)
            }

        case 'CHANGE-TITLE-TASK':
            return {
                ...state,
                [action.todolistID] : state[action.todolistID].map(el => el.id === action.taskId ? {...el, title: action.title} : el)
            };
        case "ADD-TODOLIST":
        default:
            return state
    }
}

export const removeTaskAC = (taskID:string, todolistID: string) => {
    return { type: 'REMOVE-TASKS', taskID, todolistID} as const
}
export const addTaskAC = (title: string, todolistID: string) => {
    return { type: 'ADD-TASKS',title, todolistID } as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistID: string) => {
    return {type: 'CHANGE-STATUS-TASK', taskId, isDone, todolistID } as const
}

export const changeTitleStatusAC = (taskId: string, title:string, todolistID: string) => {
    return {type: 'CHANGE-TITLE-TASK', taskId, title, todolistID} as const
}
