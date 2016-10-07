import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Photo } from '../core/domain';
import { AppState } from '../core/store';
import { PhotoService } from '../core/photos.service';
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


    savePhoto(name: string, description: string) {
        this.service.changePhoto(this.photoId, this.albumId, name, description)
    }

}
