import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksSetType = {
    [todoListID: string]: Array<TaskType>
}

function App() {

    const todoListID_1 = v1()
    const todoListID_2 = v1()

    //BLL
    const [todoLists, setTodolists] = useState<Array<TodolistType>>([
        {id: todoListID_1, title: "What to learn", filter: "all"},
        {id: todoListID_2, title: "What to buy", filter: "all"}
    ])

    const [tasks, setTasks] = useState<TasksSetType>({
        [todoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todoListID_2]: [
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Meat", isDone: true},
            {id: v1(), title: "Cheeps", isDone: false}
        ]
    })

     function removeTask(taskID: string, todolistID: string) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].filter(t => t.id !== taskID)})
    }

    function addTask(title: string, todolistID: string) {
        const newTask: TaskType = {
            id: v1(), title, isDone: false
        }
        setTasks({...tasks, [todolistID]: [newTask, ...tasks[todolistID]]});
    }

    function changeStatus(taskId: string, isDone: boolean, todoListID: string) {
        /* const tasksForCurrentTodolist = tasks[todoListID]
         const upDatedTasks = tasksForCurrentTodolist.map(t => t.id === taskId ? {...t,isDone: isDone} : t);
         const copyTasks = {...tasks}
         copyTasks[todoListID] = upDatedTasks
         setTasks(copyTasks)*/

        setTasks({...tasks, [todoListID]: tasks[todoListID].map(t => t.id === taskId ? {...t, isDone: isDone} : t)})
    }

    function changeFilter(value: FilterValuesType, todoListID: string) {
        setTodolists(todoLists.map(tl => tl.id === todoListID ? {...tl, filter: value} : tl))
    }

    function removeTodolist(todoListID: string) {
        setTodolists(todoLists.filter(tl => tl.id !== todoListID))
        delete tasks[todoListID]
    }

    const todoListsForRender = todoLists.map(tl => {

        let tasksForTodolist = tasks[tl.id]; // весь массив
        console.log(tasksForTodolist)
        if (tl.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => !t.isDone);
        }
        if (tl.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone);
        }

        return (
            <Todolist
                key={tl.id}
                title={tl.title}
                todolistID={tl.id}
                filter={tl.filter}
                tasks={tasksForTodolist}

                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                removeTodolist={removeTodolist}
                changeTaskStatus={changeStatus}
            />
        )
    })


    return (
        <div className="App">
            {todoListsForRender}
        </div>
    );
}

export default App;
