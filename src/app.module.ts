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
import { reducer } from './core/store';
import { AlbumDetail } from './album/album-detail';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        BrowserModule,
        StoreModule.provideStore(reducer),

        /*
         * To use the debugger, install the Redux Devtools extension for either
         * Chrome or Firefox
         *
         * See: https://github.com/zalmoxisus/redux-devtools-extension
         */
        // StoreDevtoolsModule.instrumentOnlyWithExtension(),

        RouterModule,
        FormsModule,
        routing
    ],
    providers: [ PhotoService ],
    declarations: [
        ShellComponent, DashboardComponent, UnknownComponent, AlbumComponent, PhotoComponent,
        AlbumDetail
    ],
    bootstrap: [ ShellComponent ]
})
export class AppModule {
}
