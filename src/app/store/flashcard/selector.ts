import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IFlashcard } from 'src/app/models/flashcard';

export const selectFLashcardState = createFeatureSelector<IFlashcard>('flashcard');

export const selectFlashcard = createSelector(selectFLashcardState, (state: IFlashcard) => state);