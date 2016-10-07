import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { Album } from '../core/domain';
import { AppState } from '../core/store';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.html')
})
export class DashboardComponent implements OnInit, OnDestroy {
    private albums$: Observable<Album[]>;
    private albumCount$: Observable<number>;
    private loading = false;
    private loadSubscription: Subscription;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit(): void {
        this.albums$ = this.store.select(x => x.albums.collection);
        this.loadSubscription = this.store.select(x => x.operation.loadingAlbums)
            .subscribe(flag => {
                this.loading = flag;
            });

        this.albumCount$ = this.albums$
            .map(x => {
                return x.length;
            });

    }

    ngOnDestroy(): void {
        this.loadSubscription.unsubscribe();
    }

}
