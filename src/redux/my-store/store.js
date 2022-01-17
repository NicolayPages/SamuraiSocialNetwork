import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: "Hi, how are you", likes: 2, },
            { id: 2, message: "Hello everything", likes: 12, },
            { id: 3, message: "Goodbye", likes: 5, },
         ],
         user: [
            {
               id: 1,
               name: "Nicolai I",
               birthday: "2 january",
               education: "BSU11",
               site: "it-kama.com",
               city: "Samara",
               ava: "https://yt3.ggpht.com/ytc/AKedOLSDfkyRyvD8wZlHqtlKyNqE5H5BqUI2CxqOKU7wAg=s900-c-k-c0x00ffffff-no-rj",
            },
         ],
         postTextMessage: "",
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Dmitriy", },
            { id: 2, name: "Sergey", },
            { id: 3, name: "Alex", },
            { id: 4, name: "John", },
            { id: 5, name: "Van", },
            { id: 6, name: "Billy", },
         ],
         messages: [
            { id: 1, name: "Dmitriy", message: "Oh shit Im sorry" },
            { id: 2, name: "Alex", message: "Sorry fot what" },
            { id: 3, name: "Dmitriy", message: "Our daddy told us not to be shamed of our dicks" },
         ],
         messageNewText: '',
      },
      sidebar: {
         links: [
            { id: 1, adress: "profile", name: "Profile", },
            { id: 2, adress: "dialogs", name: "Dialogs", },
            { id: 3, adress: "news", name: "News", },
            { id: 4, adress: "music", name: "Music", },
            { id: 5, adress: "settings", name: "Settings", },
         ],
         friends: [
            { id: 1, name: "Alex", },
            { id: 2, name: "Van", },
            { id: 3, name: "Billy", },
         ],
      },
   },
   _callSubscriber() {
      console.log('changed')
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },
   getState() {
      return this._state
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
   }
};

export default store;
window.store = store;
