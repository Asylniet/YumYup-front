import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUser } from 'src/app/models/user';

export const selectUserState = createFeatureSelector<IUser>('user');

export const selectUser = createSelector(selectUserState, (state: IUser) => state);

export const selectUserName = createSelector(selectUserState, (state: IUser) => state.name);

export const selectUserInitial = createSelector(selectUserState, (state: IUser) => state.name[0]);