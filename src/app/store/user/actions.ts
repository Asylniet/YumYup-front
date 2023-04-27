import { createAction, props } from '@ngrx/store';

import { IUser } from 'src/app/models/user';

export const update = createAction(
    '[User Update] Set User',
    props<{user: IUser}>()
);

export const updateBio = createAction(
    '[User Update] Set User Bio',
    props<{bio: string}>()
);

export const updateName = createAction(
    '[User Update] Set User Name',
    props<{name: string}>()
);