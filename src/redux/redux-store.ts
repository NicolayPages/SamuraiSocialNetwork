import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';
import errorsReducer from './errors-reducer';
import chatReducer from "./chat-reducer";


let rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
   errors: errorsReducer,
   chat: chatReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>


type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
