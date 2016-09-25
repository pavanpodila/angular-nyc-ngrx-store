import { ModuleWithProviders } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard';
import { Routes, RouterModule } from '@angular/router';
import { UnknownComponent } from './unknown/unknown';
import { AlbumComponent } from './album/album';
import { PhotoComponent } from './photo/photo';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'albums/:albumId', component: AlbumComponent },
    { path: 'photos/:photoId', component: PhotoComponent },
    { path: '**', component: UnknownComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
