import {Album, Photo} from './domain';
import {ActionReducer, Action} from '@ngrx/store';

export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const EDIT_PHOTO_NAME = 'EDIT_PHOTO_NAME';
export const EDIT_PHOTO_DESCRIPTION = 'EDIT_PHOTO_DESCRIPTION';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const EDIT_ALBUM_NAME = 'EDIT_ALBUM_NAME';

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

        case EDIT_PHOTO_NAME: {
            return savePhotoWithField('name');
        }

        case EDIT_PHOTO_DESCRIPTION:
            return savePhotoWithField('description');

        case EDIT_ALBUM_NAME: {
            const {albumId, name} = action.payload;
            const album = state.collection.find(x => x.id === albumId);
            album.name = name;

            return Object.assign({}, state);
        }

        default:
            return state;
    }

    function savePhotoWithField(field) {
        const {albumId, photoId} = action.payload;
        const album = state.collection.find(x => x.id === albumId);
        const photo = album.photos.find(x => x.id === photoId);

        photo[field] = action.payload[field];

        return Object.assign({}, state);
    }
};
