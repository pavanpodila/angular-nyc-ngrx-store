import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../core/photos.service';
import { Router } from '@angular/router';
@Component({
    selector: 'shell',
    template: require('./shell.html')
})
export class ShellComponent implements OnInit {
    constructor(private service: PhotoService, private router:Router) {

    }

    ngOnInit(): void {
        this.service.loadAlbums();
    }

    navigateHome() {
        this.router.navigate(['/']);
        this.service.loadAlbums();
    }
}
