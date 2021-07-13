
export interface TodoState {
    todos: Array<any>;
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface fetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface fetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: Array<any>
}
interface fetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface setTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE
    payload: number
}

export type TodoAction = fetchTodoAction | fetchTodoSuccessAction | fetchTodoErrorAction | setTodoPageAction

