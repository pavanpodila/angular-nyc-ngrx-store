import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../core/photos.service';
@Component({
    selector: 'dashboard',
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit{
    private albums;

    constructor(private service:PhotoService){}

    ngOnInit(): void {
        this.albums = this.service.getAlbums();
    }
}
