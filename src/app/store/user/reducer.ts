import { createReducer, on } from '@ngrx/store';
import { update, updateBio, updateName } from './actions';

import { IUser } from 'src/app/models/user';

export const initialState: IUser = {
    name: 'Aalsdkjaskdljaskdj askdlajsdkl',
    login: '',
    bio: 'asfiluhsakfs;afasha',
    cover_img: 1,
  };

export const userReducer = createReducer(
  initialState,
  on(update, (_, { user }) => ({
    name: user.name,
    bio: user.bio,
    login: user.login,
    cover_img: user.cover_img,
  })),
  on(updateBio, (state, { bio }) => ({
    ...state,
    bio: bio,
  })),
  on(updateName, (state, { name }) => ({
    ...state,
    name: name,
  })),
);