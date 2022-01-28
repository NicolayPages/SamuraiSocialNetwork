export type LinksType = {
   id: number
   adress: string
   name: string
}
export type FriendsType = {
   id: number
   name: string
}
type initialStateType = {
   links: [] | Array<LinksType>
   friends: [] | Array<FriendsType>
}

let initialState: initialStateType = {
   links: [
      { id: 1, adress: "profile", name: "Profile", },
      { id: 2, adress: "dialogs", name: "Dialogs", },
      { id: 3, adress: "news", name: "News", },
      { id: 4, adress: "music", name: "Music", },
      { id: 5, adress: "users", name: "Users", },
      { id: 6, adress: "settings", name: "Settings", },
   ],
   friends: [
      { id: 1, name: "Alex", },
      { id: 2, name: "Van", },
      { id: 3, name: "Billy", },
   ],
};


const sidebarReducer = (state = initialState, action: any): initialStateType => {
   return state;
}

export default sidebarReducer;