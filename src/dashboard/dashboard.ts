import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import { Album } from '../core/domain';
import { AppState } from '../core';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit {
    private albums$: Observable<Album[]>;
    private albumCount$: Observable<number>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.albums$ = this.store.select('albums') as Observable<Album[]>;

        this.albumCount$ = this.albums$
            .map(x => {
                return x.length;
            });

    }
}
