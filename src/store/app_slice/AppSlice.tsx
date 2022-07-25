import { createSlice } from "@reduxjs/toolkit";
import { fetchTodoThunkAction } from "../thunk_actions/fetchTodoThunkAction";
import { initialState } from "../types/todoState";

export const appSlice = createSlice(
   {
        name:'todos',
        initialState,
        reducers: {

        },
        extraReducers: (builder) => {
            builder.addCase(fetchTodoThunkAction.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            });
            builder.addCase(fetchTodoThunkAction.fulfilled, (state, {payload}) => {
                state.list.push(...payload);
                state.status = 'idle';
            });
            builder.addCase(fetchTodoThunkAction.rejected, (state, {payload}) =>{
                console.log(payload);
                state.status = 'idle'
            })
        } 
    
   }
) 

export const todoReducer =  appSlice.reducer