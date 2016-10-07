import { ActionReducer, Action } from '@ngrx/store';

export const START_ALBUMS_LOAD = 'START_ALBUMS_LOAD';
export const START_ALBUM_LOAD = 'START_ALBUM_LOAD';
export const START_PHOTO_LOAD = 'START_PHOTO_LOAD';
export const END_ALBUMS_LOAD = 'END_ALBUMS_LOAD';
export const END_ALBUM_LOAD = 'END_ALBUM_LOAD';
export const END_PHOTO_LOAD = 'END_PHOTO_LOAD';

export interface OperationState {
    loadingAlbums: boolean;
    loadingAlbum: boolean;
    loadingPhoto: boolean;
}

export const initialState: OperationState = {
    loadingAlbums: false,
    loadingAlbum: false,
    loadingPhoto: false,
};

export const reducer: ActionReducer<OperationState> = (state: OperationState, action: Action) => {
    switch (action.type) {
        case START_ALBUMS_LOAD:
            return Object.assign({}, state, {loadingAlbums: true});

        case END_ALBUMS_LOAD:
            return Object.assign({}, state, {loadingAlbums: false});

        case START_ALBUM_LOAD:
            return Object.assign({}, state, {loadingAlbum: true});

        case END_ALBUM_LOAD:
            return Object.assign({}, state, {loadingAlbum: false});

        case START_PHOTO_LOAD:
            return Object.assign({}, state, {loadingPhoto: true});

        case END_PHOTO_LOAD:
            return Object.assign({}, state, {loadingPhoto: false});

        default:
            return state;
    }
};
