import {Injectable} from '@angular/core';
import {mockAlbums} from './mock-albums';
import {Album} from './domain';
import {AppState} from './store';
import {Store} from '@ngrx/store';
import {LOAD_ALBUMS, SELECT_PHOTO, SELECT_ALBUM} from './albums.reducer';
import {
    START_ALBUMS_LOAD, END_ALBUMS_LOAD, START_ALBUM_LOAD, END_ALBUM_LOAD,
    END_PHOTO_LOAD, START_PHOTO_LOAD
} from './operation.reducer';


@Injectable()
export class PhotoService {

    albums: Album[];

    constructor(private store: Store<AppState>) {
    }

    getAlbums(): Promise<Album[]> {
        if (this.albums) {
            return Promise.resolve(this.albums);
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                this.albums = mockAlbums;
                resolve(this.albums);
            }, 1000);
        });
    }


    loadAlbums() {
        this.store.dispatch({
            type: START_ALBUMS_LOAD
        });

        this.getAlbums()
            .then(albums => {
                this.store.dispatch({
                    type: LOAD_ALBUMS,
                    payload: albums
                });

                this.store.dispatch({
                    type: END_ALBUMS_LOAD
                });

            });
    }

    loadAlbum(albumId: string) {
        this.store.dispatch({
            type: START_ALBUM_LOAD
        });

        this.getAlbums()
            .then(albums => {
                const album = albums.find(x => x.id === albumId);

                this.store.dispatch({
                    type: SELECT_ALBUM,
                    payload: album
                });

                this.store.dispatch({
                    type: END_ALBUM_LOAD
                });

            });
    }

    loadPhoto(photoId: string, albumId: string) {
        this.store.dispatch({
            type: START_PHOTO_LOAD
        });

        this.getAlbums()
            .then(albums => {
                const album = albums.find(x => x.id === albumId);
                const photo = (album || new Album()).photos.find(x => x.id === photoId);

                this.store.dispatch({
                    type: SELECT_PHOTO,
                    payload: photo
                });

                this.store.dispatch({
                    type: END_PHOTO_LOAD
                });
            });
    }
}

