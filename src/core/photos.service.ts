import { Injectable } from '@angular/core';
import { mockAlbums } from './mock-albums';
import { LOAD_ALBUMS } from './store';
import { Store } from '@ngrx/store';
import { Album } from './domain';
import { AppState } from './';


@Injectable()
export class PhotoService {

    constructor(private store: Store<AppState>) {
    }

    getAlbums(): Promise<Album[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(mockAlbums), 1000);
        });
    }

    loadAlbums() {
        this.getAlbums()
            .then(albums => {
                this.store.dispatch({
                    type: LOAD_ALBUMS,
                    payload: albums
                });
            })
    }

}

