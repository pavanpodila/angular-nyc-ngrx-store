import {Album, Photo} from './domain';
import {ActionReducer, Action} from '@ngrx/store';

export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const CHANGE_PHOTO = 'CHANGE_PHOTO';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const CHANGE_ALBUM = 'CHANGE_ALBUM';

export interface AlbumState {
    collection: Album[];
    selectedAlbum: Album;
    selectedPhoto: Photo;
}

export const initialState: AlbumState = {
    collection: [],
    selectedAlbum: null,
    selectedPhoto: null
};

export const reducer: ActionReducer<AlbumState> = (state: AlbumState, action: Action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return Object.assign({}, state, {
                collection: action.payload,
                selectedAlbum: null,
                selectedPhoto: null
            });

        case SELECT_ALBUM: {
            return Object.assign({}, state, {
                selectedAlbum: action.payload
            });
        }

        case SELECT_PHOTO: {
            return Object.assign({}, state, {
                selectedPhoto: action.payload
            });
        }

        case CHANGE_PHOTO: {
            const {albumId, photoId, name, description} = action.payload;
            const album = state.collection.find(x => x.id === albumId);
            const photo = album.photos.find(x => x.id === photoId);

            photo.name = name;
            photo.description = description;

            return Object.assign({}, state);
        }

        case CHANGE_ALBUM: {
            const {albumId, name} = action.payload;
            const index = state.collection.findIndex(x => x.id === albumId);
            const album = Object.assign(new Album(), state.collection[index], {name});

            state.collection[index] = album;
            const selectedAlbum = (state.selectedAlbum && state.selectedAlbum.id === albumId)
                ? album
                : state.selectedAlbum;

            return Object.assign({}, state, {
                selectedAlbum
            });
        }

        default:
            return state;
    }

};
