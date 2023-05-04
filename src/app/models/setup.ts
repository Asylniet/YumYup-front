export type Status = 'IDLE' | 'PENDING' | 'FAILED' | 'SUCCESS';

export interface IResult {
    status: Status;
    errorMesage?: string;
}