import { IResult } from "./setup";

export interface IProduct {
    id?: number;
    title: string;
    expiration_date: Date;
    emoji: string;
}

export interface IProductResult extends IResult {
    products: IProduct[];
}