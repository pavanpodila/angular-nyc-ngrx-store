import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../core/photos.service';
@Component({
    selector: 'shell',
    template: require('./shell.html')
})
export class ShellComponent implements OnInit {
    constructor(private service: PhotoService) {

    }

    ngOnInit(): void {
        this.service.loadAlbums();
    }
}
