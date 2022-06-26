import axios from 'axios'

type TaskType= {
    id:string,
    title:string,
    completed:boolean
    description:string|null,
    todoListId:string,
    order:number,
    status:0|1,
    priority:number,
    startDate:string|null,
    deadline:string|null,
    addedDate:string
}
type GetResponseType= {
    items:Array<TaskType>,
    totalCount:number,
    error:null
}
/*
type PostResponseType = {
    data: {
        item: TaskType
    }
    resultCode: number
    messages: Array<string>
}
type PutResponseType = {
    data: {
        item: TaskType
    }
    resultCode: number
    messages: Array<string>
}
type DeleteResponseType = {
    data: {}
    resultCode: number
    messages: Array<string>
}*/

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

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


export const taskAPI = {

    createTask (todolistId: string, title: string) {
        const promise = instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`, {title: title})
        return promise
    },

    getTask(todolistId: string) {
        const promise = instance.get<Array<TaskType>>(`todo-lists/${todolistId}/tasks`)
        return promise
    },

    deleteTask (todolistId: string,taskID:string) {
        const promise = instance.delete<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskID}`)
        return promise
    },

    updateTask(todolistId: string,taskID:string, title: string) {
        const promise = instance.put<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/${taskID}`, {title: title})
        return promise
    }


}
