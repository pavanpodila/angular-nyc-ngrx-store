import {Component, Input, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {Album} from '../core/domain';

@Component({
    selector: 'album-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: require('./album-detail.html')
})
export class AlbumDetail implements OnChanges{
    @Input() album: Album;

    @Output() changed = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['album']) {
            console.log(changes['album']);
        }
    }


    saveAlbum(name) {
        this.changed.emit(name);
    }


}