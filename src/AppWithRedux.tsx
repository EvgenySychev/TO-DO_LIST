import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import {
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from "./state/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer, changeTaskTitleAC} from "./state/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import { AppRootStateType } from './state/store';
import { TodolistWithTasks } from './TodolistWithTasks';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {

    let todolists = useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)

    let tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    let dispatch = useDispatch()


    function removeTask(id: string, todolistId: string) {
        dispatch(removeTaskAC(id, todolistId))
    }
    function addTask(title: string, todolistId: string) {
        dispatch(addTaskAC(title, todolistId))
    }
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatch(changeTaskStatusAC(id, isDone, todolistId))
    }
    function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
        dispatch(changeTaskTitleAC(id, newTitle, todolistId))
    }
    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatch(changeTodolistFilterAC(todolistId, value))
    }
    function removeTodolist(id: string) {
        let action = removeTodolistAC(id)
        dispatch(action)
    }
    function changeTodolistTitle(id: string, title: string) {
        dispatch(changeTodolistTitleAC(id, title))
    }
    function addTodolist(title: string) {
        let action = addTodolistAC(title)
        dispatch(action)
    }

    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "20px"}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {

                            return <Grid item key={tl.id}>
                                <Paper style={{padding: "10px"}}>
                                    <TodolistWithTasks
                                       todolist={tl}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default AppWithRedux;
