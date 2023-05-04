import { createReducer, on } from '@ngrx/store';
import { show, close, setStatus } from './actions';
import { IFlashcard } from 'src/app/models/flashcard';


export const initialState: IFlashcard = {
    status: 'IDLE',
    subject: ''
};

export const flashcardReducer = createReducer(
  initialState,
  on(show, (_, { subject, status }) => ({
    status: status,
    show: true,
    subject: subject,
  })),
  on(close, (state) => ({
    ...state,
    status: 'IDLE',
  })),
  on(setStatus, (state, { status }) => ({
    ...state,
    status: status,
  })),
);