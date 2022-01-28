const ADD_MESSAGE = 'ADD-MESSAGE';

export type DialogsType = {
   id: number
   name: string
}
export type MessagesType = {
   id: number
   name: string
   message: string
}

let initialState = {
   dialogs: [
      { id: 1, name: "Billy", },
      { id: 2, name: "Sergey", },
      { id: 3, name: "Alex", },
   ] as Array<DialogsType>,
   messages: [
      { id: 1, name: "Billy", message: "Oh shit Im sorry" },
      { id: 2, name: "Alex", message: "Sorry fot what" },
   ] as Array<MessagesType>,
};


type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
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


type addMessageActionCreatorType = {
   type: typeof ADD_MESSAGE
   message: string
}
export const addMessageActionCreator = (message: string): addMessageActionCreatorType =>
   ({ type: ADD_MESSAGE, message });



export default dialogsReducer;