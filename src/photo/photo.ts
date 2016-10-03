import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EDIT_PHOTO_NAME, EDIT_PHOTO_DESCRIPTION } from '../core/store';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Photo, Album } from '../core/domain';
import { AppState } from '../core';
@Component({
    selector: 'photo',
    template: require('./photo.html')
})
export class PhotoComponent implements OnInit, OnDestroy {
    private photo: Photo;
    private albumId;
    private photoId;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.albumId = this.route.snapshot.params[ 'albumId' ];
        this.photoId = this.route.snapshot.params[ 'photoId' ];

        this.subscription = this.store.select('albums')
            .flatMap((x: Album[]) => Observable.from(x))
            .filter(x => x.id === this.albumId)
            .switchMap(x => Observable.from(x.photos))
            .filter(x => x.id === this.photoId)
            .take(1)
            .subscribe((photo: Photo) => {
                this.photo = photo;
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


    savePhotoWithName(name: string) {
        this.store.dispatch({
            type: EDIT_PHOTO_NAME,
            payload: {
                albumId: this.albumId,
                photoId: this.photoId,
                name
            }
        });
    }

    savePhotoWithDescription(description: string) {
        this.store.dispatch({
            type: EDIT_PHOTO_DESCRIPTION,
            payload: {
                albumId: this.albumId,
                photoId: this.photoId,
                description
            }
        });
    }
}
