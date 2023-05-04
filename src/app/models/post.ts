import { IComment } from "./comment";
import { IResult } from "./setup";

export interface IPostCard {
    id?: number;
    author: string;
    title: string;
    date: Date;
    rating: number;
    comments: IComment[];
    img: string;
}

export interface IPostCardResult extends IResult {
    postCards: IPostCard[];
}