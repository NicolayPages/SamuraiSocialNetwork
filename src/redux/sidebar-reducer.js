let initialState = {
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


const sidebarReducer = (state = initialState, action) => {
   return state;
}

export default sidebarReducer;