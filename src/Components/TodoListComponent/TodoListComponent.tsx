import React from 'react'
import { useAppSelector } from '../../store/hooks/appHooks'

const TodoListComponent:React.FC = () => {

    const state = useAppSelector(state => state);

    return (
        <div>
            {
                state.list.map((todo) => 
                    <div key={todo.id}>
                        {
                            todo.id
                        }
                        :        
                        {
                            todo.title
                        }
                    </div>
                )
            }
        </div>
    )
}

export default TodoListComponent