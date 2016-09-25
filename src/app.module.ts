import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { routing } from './routing';
import { DashboardComponent } from './dashboard/dashboard';
import { UnknownComponent } from './unknown/unknown';
import { AlbumComponent } from './album/album';
import { PhotoService } from './core/photos.service';
import { PhotoComponent } from './photo/photo';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        BrowserModule,
        StoreModule,
        RouterModule,
        FormsModule,
        routing
    ],
    providers: [ PhotoService ],
    declarations: [ ShellComponent, DashboardComponent, UnknownComponent, AlbumComponent, PhotoComponent ],
    bootstrap: [ ShellComponent ]
})
export class AppModule {
}
