import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {FullInput} from "./Components/FullInput";
import {EditableSpan} from "./Components/EditableSpan";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todolistID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todolistID:string, taskId: string) => void
    changeFilter: (todolistID:string, value: FilterValuesType) => void
    addTask: (todolistID:string, title: string) => void
    changeTaskStatus: (todolistID:string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodolist: (todolistID:string)=> void
    editTodolist: (todoistID:string, title:string) => void
    editTask:(id:string,tID:string,newTitle:string)=> void
}

export function Todolist(props: PropsType) {



    const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todolistID, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todolistID, "completed");
    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistID)
    }
    const addTaskHandler = (newValue:string) => {
        props.addTask(props.todolistID,newValue)
    }
    const editTodolistHandler = (newTitle:string) => {
        props.editTodolist(props.todolistID,newTitle)
    }
    const editTaskHandler=(tID:string, newTitle:string)=>{
        props.editTask(props.todolistID,tID,newTitle)
    }


    return <div>
        <h3>
            <EditableSpan title={props.title} callBack={editTodolistHandler}/>
            <button onClick={removeTodolistHandler}>X</button>
        </h3>
        <FullInput callback={addTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(props.todolistID, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <EditableSpan title={t.title} callBack={(newTitle)=>editTaskHandler(t.id,newTitle)}/>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}
