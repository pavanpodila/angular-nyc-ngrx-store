import * as fromAlbums from './albums.reducer';
import { AlbumState } from './albums.reducer';
import * as fromOperation from './operation.reducer';
import { OperationState } from './operation.reducer';

export interface AppState {
    albums: AlbumState;
    operation:OperationState;
}


export const initialState: AppState = {
    albums: fromAlbums.initialState,
    operation: fromOperation.initialState
};


export const reducer = {
    albums: fromAlbums.reducer,
    operation: fromOperation.reducer,
};

