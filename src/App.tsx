import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const arr1 = [
        {id: 1, title: "HTML&CSS1", isDone: true},
        {id: 2, title: "JS1", isDone: true},
        {id: 3, title: "ReactJS1", isDone: false},
        {id: 4, title: "Rest API1", isDone: false},
    ]
    const arr2 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist topic1={'tra-ta-ta111'} arr={arr1}/>
            <Todolist topic2={'tra-ta-ta222'} arr={arr2}/>
        </div>
    );
}

export default App;

/*import React from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

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

}*/
