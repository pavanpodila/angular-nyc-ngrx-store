import { ActionReducer, Action } from '@ngrx/store';
import { Album, Photo, AppState } from './domain';

export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const EDIT_PHOTO_NAME = 'EDIT_PHOTO_NAME';
export const EDIT_PHOTO_DESCRIPTION = 'EDIT_PHOTO_DESCRIPTION';
export const EDIT_ALBUM_NAME = 'EDIT_ALBUM_NAME';


export const initialState: AppState = {
    albums: []
};

const albumReducer: ActionReducer<Album[]> = (state: Album[], action: Action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return action.payload;

        case EDIT_PHOTO_NAME: {
            return savePhotoWithField('name');
        }

        case EDIT_PHOTO_DESCRIPTION:
            return savePhotoWithField('description');

        case EDIT_ALBUM_NAME: {
            const { albumId, name } = action.payload;
            const index = state.findIndex(x => x.id === albumId);
            const album = Object.assign(new Album(''), state[ index ], { name });

            return [ ...state.slice(0, index), album, ...state.slice(index + 1) ];
        }

        default:
            return state;
    }

    function savePhotoWithField(field) {
        const { albumId, photoId } = action.payload;
        const albumIndex = state.findIndex(x => x.id === albumId);
        const album = state[ albumIndex ];
        const photoIndex = album.photos.findIndex(x => x.id === photoId);

        const photo = Object.assign(new Photo('', ''), album.photos[ photoIndex ], {
                [field]: action.payload[ field ]
            }
        );
        const photos = [ ...album.photos.slice(0, photoIndex), photo, ...album.photos.slice(photoIndex + 1) ];
        const newAlbum = Object.assign(new Album(''), album, { photos });

        return [ ...state.slice(0, albumIndex), newAlbum, ...state.slice(albumIndex + 1) ];
    }
};

export const reducer = {
    albums: albumReducer
};

