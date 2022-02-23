import { ThunkAction } from "redux-thunk";
import { dialogsAPI, ResultCodeEnum } from "../api";
import { AppStateType, InferActionsTypes } from "./redux-store";


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
   isFetching: false,
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
      case 'SET_NEW_MESSAGES': {
         return {
            ...state,
            dialogs: [...state.dialogs, action.data]
         }
      };
      case 'TOGGLE_IS_FETCHING': {
         return {
            ...state,
            isFetching: action.isFetching
         }
      };
      default:
         return state;
   }
};



export const actions = {
   addMessageActionCreator: (message: string) => ({ type: 'ADD_MESSAGE', message } as const),
   getNewMessages: (data: any) => ({ type: 'SET_NEW_MESSAGES', data } as const),
   toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const)
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>


export const getAllMessages = (userId: number): ThunkType => async (dispatch) => {
   dispatch(actions.toggleIsFetching(true))
   try {
      let data = await dialogsAPI.getMessages(userId)
      if (data.resultCode == ResultCodeEnum.Success) {
         console.log(data)
      }
   } catch (error) {
      console.log(error)
   }
   dispatch(actions.toggleIsFetching(false))
}
export const startNewChat = (userId: number): ThunkType => async (dispatch) => {
   dispatch(actions.toggleIsFetching(true))
   try {
      let data = await dialogsAPI.startChatting(userId)
      console.log(data)
   } catch (error) {
      console.log(error)
   }
   dispatch(actions.toggleIsFetching(false))
}

export default dialogsReducer;