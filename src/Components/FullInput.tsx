import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";


export type FullInputPropsType = {

    callback: (value:string)=> void
}

export const FullInput = (props:FullInputPropsType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<boolean>(false)

    const addTask = () => {
        if (title.trim() !== "") {
            props.callback(title.trim());
            setTitle("");
        } else {
            setError(true);
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>

            <TextField id="outlined-basic"
                       label={error? "Title is required": `Text`}
                       variant="outlined"
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       size={"small"}
                       error={error}
            />

            <Button variant="contained"  onClick={addTask} color={'primary'} style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', backgroundColor: "darkgreen"}}

            >+</Button>

        </div>
    );
}
