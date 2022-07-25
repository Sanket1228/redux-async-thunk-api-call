import React from 'react'
import { useAppSelector } from '../../store/hooks/appHooks'
import { List, Todoid, TodoList, TodoTitle } from './TodoList.styled';

const TodoListComponent:React.FC = () => {

    const state = useAppSelector(state => state);

    return (
        <div>
            {
                state.list.map((todo) => 
                    <TodoList key={todo.id}>
                        <List>
                           <Todoid>
                               { todo.id }
                            </Todoid>
                            <TodoTitle>
                                { todo.title }
                            </TodoTitle>
                            <Todoid>
                               { todo.completed }
                            </Todoid>
                        </List>
                    </TodoList>
                )
            }
        </div>
    )
}

export default TodoListComponent