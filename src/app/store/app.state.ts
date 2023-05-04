import { IUser } from "../models/user";
import { userReducer } from "./user/reducer";
import { flashcardReducer } from "./flashcard/reducer";
import { IFlashcard } from "../models/flashcard";

export interface AppState {
    user: IUser,
    flashcard: IFlashcard,
}

export const appReducer = {
    user: userReducer,
    flashcard: flashcardReducer,
}