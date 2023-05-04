import { IResult } from "./setup";

export interface IComment {
    id?: number;
    author: string,
    rating: number;
    comment: string;
    date: Date;
}

export interface ICommentResult extends IResult {
    comments: IComment[];
}