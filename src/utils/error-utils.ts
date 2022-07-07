import { setAppErrorAC, setAppStatusAC } from '../app/app-reducer';
import { Dispatch } from 'redux';
import { ResponseType } from '../api/todolists-api';
import {ActionsType} from "../features/TodolistsList/tasks-reducer";

// generic function
export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch<ActionsType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (message: string, dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

//type ErrorUtilsDispatchType = Dispatch<SetAppErrorActionType | SetAppStatusActionType>