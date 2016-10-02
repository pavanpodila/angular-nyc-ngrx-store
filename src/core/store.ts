import { ActionReducer, Action } from '@ngrx/store';
import { Album } from './photos.service';

export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const EDIT_PHOTO_NAME = 'EDIT_PHOTO_NAME';
export const EDIT_PHOTO_DESCRIPTION = 'EDIT_PHOTO_DESCRIPTION';
export const EDIT_ALBUM_NAME = 'EDIT_ALBUM_NAME';

export interface AppState {
    albums: Album[]
}

export const initialState: AppState = {
    albums: []
};

const albumReducer: ActionReducer<Album[]> = (state: Album[], action: Action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return action.payload;

        case EDIT_PHOTO_NAME:
            return state;

        case EDIT_PHOTO_DESCRIPTION:
            return state;

        case EDIT_ALBUM_NAME:
            const { albumId, name } = action.payload;
            const index = state.findIndex(x => x.id === albumId);
            const album = Object.assign(new Album(''), state[index], {name});

            return [...state.slice(0, index), album, ...state.slice(index + 1)];

        default:
            return state;
    }
};

export const reducer = {
    albums: albumReducer
};
