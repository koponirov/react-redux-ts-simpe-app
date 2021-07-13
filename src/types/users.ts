export interface UserState {
    users: Array<any>;
    loading: boolean;
    error: null | String;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchSuccessUserAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: Array<any>;
}
interface FetchErrorUserAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchSuccessUserAction | FetchErrorUserAction
