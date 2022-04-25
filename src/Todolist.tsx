import React from "react";


type TodolistPropsType = {
    topic1?: string
    topic2?: string
    arr: Array<ArrayPropsType>
}

type ArrayPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return (
        <div>
            <h1>tratata</h1>
            <h1>{props.topic1}</h1>
            <h1>{props.topic2}</h1>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.arr.map((el) => {
                    return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )

}