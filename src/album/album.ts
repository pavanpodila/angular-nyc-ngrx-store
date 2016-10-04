import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import {Album} from '../core/domain';
import {AppState} from '../core/store';
import {EDIT_ALBUM_NAME} from '../core/albums.reducer';
import {PhotoService} from '../core/photos.service';

@Component({
    selector: 'album',
    template: require('./album.html')
})
export class AlbumComponent implements OnInit, OnDestroy {
    private album: Album;
    private subscription: Subscription;
    private albumId: string;
    private loading = false;
    private loadSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private store: Store<AppState>,
                private service: PhotoService) {
    }

    ngOnInit(): void {
        this.albumId = this.route.snapshot.params['albumId'];
        this.subscription = this.store.select(x => x.albums.selectedAlbum)
            .subscribe((album: Album) => {
                this.album = album;
            });

        this.loadSubscription = this.store.select(x => x.operation.loadingAlbum)
            .subscribe(flag => {
                this.loading = flag;
            });

        this.service.loadAlbum(this.albumId);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.loadSubscription.unsubscribe();
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
