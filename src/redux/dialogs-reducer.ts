import { InferActionsTypes } from "./redux-store";


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

type ActionTypes = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionTypes): initialStateType => {
   switch (action.type) {
      case "ADD_MESSAGE": {
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



export const actions = {
   addMessageActionCreator: (message: string) => ({ type: 'ADD_MESSAGE', message } as const)
}



export default dialogsReducer;