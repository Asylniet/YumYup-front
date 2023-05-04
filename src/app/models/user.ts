import { IResult } from "./setup";

export interface IUser {
    id?: number;
    name: string;
    login: string;
    bio: string;
    cover_img: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export interface IUserResult extends IResult {
    user: IUser;
}