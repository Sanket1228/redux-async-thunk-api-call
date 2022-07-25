import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../types/todoType";

export const fetchTodoThunkAction = createAsyncThunk(
    'todo/fetch',
    async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data:Todo[] = await response.json();
        return data
    }
)