import * as React from 'react';


const ProfileContainer = React.lazy(() => import('../components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('../components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('../components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('../components/Login/Login'));
const ChatPage = React.lazy(() => import('../components/Chat/ChatPage'));

export type RouteType = {
   path: string
   component: any
   exact?: boolean
}

export const privateRoutes: Array<RouteType> = [
   { path: '/profile/:userId?', component: ProfileContainer, exact: true },
   { path: '/dialogs', component: DialogsContainer, exact: false },
   { path: '/users', component: UsersContainer, exact: false },
   { path: '/chat', component: ChatPage, exact: false },
]

export const publicRoutes: Array<RouteType> = [
   { path: '/login', component: LoginContainer, exact: false },
   { path: '/users', component: UsersContainer, exact: false },
   { path: '/profile/:userId', component: ProfileContainer, exact: true },
]