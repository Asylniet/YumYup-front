import { IUser } from "../models/user";
import { userReducer } from "./user/reducer";

export interface AppState {
    user: IUser
}

export const appReducer = {
    user: userReducer,
}