import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Album } from '../core/domain';

@Component({
    selector: 'album-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./album-detail.html')
})
export class AlbumDetail {
    @Input() album: Album;

    @Output() changed = new EventEmitter<string>();

    saveAlbum(name) {
        this.changed.emit(name);
    }


}
