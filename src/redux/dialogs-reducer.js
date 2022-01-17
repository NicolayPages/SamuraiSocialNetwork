const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
   dialogs: [
      { id: 1, name: "Billy", },
      { id: 2, name: "Sergey", },
      { id: 3, name: "Alex", },
   ],
   messages: [
      { id: 1, name: "Billy", message: "Oh shit Im sorry" },
      { id: 2, name: "Alex", message: "Sorry fot what" },
      { id: 3, name: "Billy", message: "Our daddy told us not to be shamed of our dicks" },
   ],
};


const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE: {
         let newMessage = {
            id: 4,
            name: "Dmitriy",
            message: action.message,
         };
         return {
            ...state,
            messages: [...state.messages, newMessage],
         };
      };
      default:
         return state;
   }
};


export const addMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message });

export default dialogsReducer;