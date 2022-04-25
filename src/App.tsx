import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks1, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false}
    ])

    const removeTask = (newId: number) => {
        setTasks(tasks1.filter((el) => el.id !== newId))
        console.log(newId)
    }

    const [filter,setFilter] = useState ('All')

    let filteredTasks = tasks1
    if (filter === 'Active') {
        filteredTasks = tasks1.filter((el) => !el.isDone)
    }
    if (filter === 'Completed') {
        filteredTasks= tasks1.filter((el) => el.isDone)
    }

    const changeFilter = (filterValue: string) => {
        setFilter(filterValue)
    }



    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
