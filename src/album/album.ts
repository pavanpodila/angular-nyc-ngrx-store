import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EDIT_ALBUM_NAME } from '../core/store';
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import { Album } from '../core/domain';
import { AppState } from '../core';

@Component({
    selector: 'album',
    template: require('./album.html')
})
export class AlbumComponent implements OnInit, OnDestroy {
    private album: Album;
    private subscription: Subscription;
    private albumId: string;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.albumId = this.route.snapshot.params[ 'albumId' ];
        this.subscription = this.store.select('albums')
            .flatMap((x: Album[]) => Observable.from(x))
            .filter(x => x.id === this.albumId)
            .take(1)
            .subscribe((album: Album) => {
                this.album = album;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    saveAlbum(name) {
        this.store.dispatch({
            type: EDIT_ALBUM_NAME,
            payload: {
                name,
                albumId: this.albumId
            }
        });
    }

}
