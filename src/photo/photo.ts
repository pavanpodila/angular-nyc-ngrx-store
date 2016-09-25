import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService, Photo } from '../core/photos.service';
@Component({
    selector: 'photo',
    template: require('./photo.html')
})
export class PhotoComponent implements OnInit {
    private photo:Photo;

    constructor(private route: ActivatedRoute, private service: PhotoService) {
    }

    ngOnInit(): void {
        const photoId = this.route.snapshot.params[ 'photoId' ];
        this.photo = this.service.getPhoto(photoId);
    }


}
