import React from 'react';
import { ButtonComponent } from './ButtonComponent/ButtonComponent';
import TodoListComponent from './TodoListComponent/TodoListComponent';

const App: React.FC = () => ( 
    <div className="App"> 
        <ButtonComponent/>
        <TodoListComponent/>
    </div>
);

export default App;
