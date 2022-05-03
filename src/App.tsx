import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {FullInput} from "./Components/FullInput";

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    const editTask = (todolistID:string,taskID:string,newTitle:string)=> {
        setTasks({...tasks, [todolistID]:tasks[todolistID].map(el=> el.id===taskID ? {...el,title:newTitle} : el)})
    }

    const editTodolist = (todolistID:string, title:string) => {
setTodolists(todolists.map(el=> el.id===todolistID ? {...el,title:title} : el))
    }

    const addTodolist = (newTitle:string) => {
        let newId = v1()
        let newTodolist:todolistsType = {id: newId, title: newTitle, filter: 'all'}
        setTodolists([newTodolist,...todolists])
        setTasks({...tasks,[newId]:[]})
    }

    const removeTodolist = (todolistID:string) => {
        setTodolists(todolists.filter(t => t.id !== todolistID))
delete tasks[todolistID]
        console.log(tasks)
    }
    function removeTask(todolistID:string, id: string) {

        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id != id)})
    }
    function addTask(todolistID:string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistID]: [task, ...tasks[todolistID]]})
    }
    function changeStatus(todolistID:string, taskId: string, isDone: boolean) {
        console.log(todolistID)
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id===taskId ? {...el,isDone} : el)})
    }
    function changeFilter(todolistID:string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistID ? {...el,filter:value} : el))
      }


    return (
        <div className="App">
            <FullInput callback={addTodolist}/>
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                }

                return (
                    <Todolist
                        key={el.id}
                        todolistID={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                        removeTodolist = {removeTodolist}
                        editTodolist = {editTodolist}
                        editTask = {editTask}
                    />
                )
            })}


        </div>
    );
}

export default App;
