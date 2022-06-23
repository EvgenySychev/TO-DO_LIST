import axios from 'axios'

type TodolistType= {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

/*
type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}

type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}*/

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '6e03d1d2-7960-47f3-925c-f3ab55ba6937'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})


export const todolistAPI = {
    updateTodolist(todolistId: string, title: string) {
        const promise = instance.put(`todo-lists/${todolistId}`, {title: title})
        return promise
    },

    getTodolists() {
        const promise = instance.get<Array<TodolistType>>('todo-lists')
        return promise
    },

    deleteTodolist (todolistId: string) {
        const promise = instance.delete(`todo-lists/${todolistId}`)
        return promise
    },

    createTodolist (title: string) {
        const promise = instance.post<ResponseType<{item: TodolistType}>>('todo-lists', {title: title})
        return promise
    }
}
