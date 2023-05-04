import { createAction, props } from '@ngrx/store';
import { Status } from 'src/app/models/setup';

export const show = createAction(
    '[Flashcard Show] Set Flashcard',
    props<{subject: string, status: Status}>()
);

export const setStatus = createAction(
    '[Flashcard Update] Set Status',
    props<{status: Status}>()
)

export const close = createAction(
    '[Flashcard Close] Set Flashcard'
);