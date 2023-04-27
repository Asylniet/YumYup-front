import { IComment } from "./comment";

export interface IPost {
    author: string;
    name: string;
    date: Date;
    rating: number;
    comments: IComment[];
    img: string;
}