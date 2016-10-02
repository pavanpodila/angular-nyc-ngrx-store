

import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../core/photos.service';
import { LOAD_ALBUMS, AppState } from '../core/store';
import { Store } from '@ngrx/store';
@Component({
    selector: 'shell',
    template: require('./shell.html')
})
export class ShellComponent implements OnInit {
    constructor(private service:PhotoService, private store:Store<AppState>) {

    }

    ngOnInit(): void {
        this.service.getAlbums()
            .then(albums => {
                this.store.dispatch({
                    type: LOAD_ALBUMS,
                    payload: albums
                });
            });
    }
}
