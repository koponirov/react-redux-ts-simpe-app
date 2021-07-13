import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

import {useActionCreators} from "../hooks/useActionCreators";

const TodoList: React.FC = () => {
    const { page, error, todos, limit, loading} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage } = useActionCreators()
    const pages = [1,2,3,4,5,6,7,8,9,10]
    useEffect(() => {
        fetchTodos(page, limit)
    },[page])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.id}-{todo.title}</li>)}
            </ul>
            <div style={{display: 'flex'}}>
                {pages.map(p=> (
                    <div
                        onClick={() => setTodoPage(p)}
                        style={{border: p === page ? '2px solid blue' : '1px solid grey', padding: '6px', marginRight: '6px'}}>
                        {p}
                    </div>
                    )
                )}
            </div>

        </div>
    );
};

export default TodoList;
