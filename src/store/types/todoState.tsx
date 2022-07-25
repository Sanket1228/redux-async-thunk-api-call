import { Todo } from "./todoType";

export type todoState = {
    status: 'loading' | 'idle';
    error: string | null;
    list: Todo[];
}

export const initialState: todoState = {
    status: 'idle',
    error: null,
    list: []
}