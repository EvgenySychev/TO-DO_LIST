import React, {useEffect, useState} from 'react'
import {taskAPI} from "../api/task-api";

export default {
    title: 'API'
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '54aca609-6930-4b26-8731-80926511a814';
        taskAPI.getTask(todolistId)
            .then((res) => {
                setState(res.data);
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "NEW TASK"
        const todolistId = '54aca609-6930-4b26-8731-80926511a814';
        taskAPI.createTask(todolistId,title)
        .then( (res) => {
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '54aca609-6930-4b26-8731-80926511a814';
        const taskID = '049b4f50-2372-4a27-a63f-37cd8ed8db80'
        taskAPI.deleteTask(todolistId,taskID)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '54aca609-6930-4b26-8731-80926511a814'
        const taskID = '6898a4db-a387-4c9f-9be3-c07254e11b43'
        taskAPI.updateTask(todolistId, taskID,'SOME NEW TITLE')
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

