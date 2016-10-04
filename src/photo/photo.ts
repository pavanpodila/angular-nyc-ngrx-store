import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {Photo} from '../core/domain';
import {AppState} from '../core/store';
import {EDIT_PHOTO_DESCRIPTION, EDIT_PHOTO_NAME, SELECT_PHOTO} from '../core/albums.reducer';
import {PhotoService} from '../core/photos.service';
@Component({
    selector: 'photo',
    template: require('./photo.html')
})
export class PhotoComponent implements OnInit, OnDestroy {
    private photo: Photo;
    private albumId;
    private photoId;
    private subscription: Subscription;
    private loading = false;
    private loadSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private store: Store<AppState>,
                private service: PhotoService) {
    }

    ngOnInit(): void {
        this.albumId = this.route.snapshot.params['albumId'];
        this.photoId = this.route.snapshot.params['photoId'];

        this.subscription = this.store.select(x => x.albums.selectedPhoto)
            .subscribe((photo: Photo) => {
                this.photo = photo;
            });

        this.loadSubscription = this.store.select(x => x.operation.loadingPhoto)
            .subscribe(flag => {
                this.loading = flag;
            });

        this.service.loadPhoto(this.photoId, this.albumId);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.loadSubscription.unsubscribe();
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
