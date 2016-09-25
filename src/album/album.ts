import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../core/photos.service';
@Component({
    selector: 'album',
    template: require('./album.html')
})
export class AlbumComponent implements OnInit {
    private albumId;
    private album;

    constructor(private route: ActivatedRoute, private service: PhotoService) {
    }

    ngOnInit(): void {
        const albumId = this.route.snapshot.params[ 'albumId' ];
        this.album = this.service.getAlbum(albumId);
    }


}
