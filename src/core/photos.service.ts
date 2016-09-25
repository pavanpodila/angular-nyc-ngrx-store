import { Injectable } from '@angular/core';
import * as uniqueId from 'lodash/uniqueId';

const images = [

    'Abstract.jpg',
    'Desert.jpg',
    'Milky Way.jpg',
    'Earth and Moon.jpg',
    'Earth Horizon.jpg',

    'El Capitan 2.jpg',
    'El Capitan.jpg',

    'Antelope Canyon.jpg',
    'Elephant.jpg',
    'Lion.jpg',

    'Bahamas Aerial.jpg',
    'Blue Pond.jpg',
    'Death Valley.jpg',
    'Lake.jpg',
    'Floating Ice.jpg',
    'Foggy Forest.jpg',
    'Foxtail Barley.jpg',
    'Mountain Range.jpg',
    'Poppies.jpg',
    'Rice Paddy.jpg',
    'Rolling Waves.jpg',
    'Snow.jpg',
    'Wave.jpg',

    'Sierra 2.jpg',
    'Sierra.jpg',


    'Yosemite 2.jpg',
    'Yosemite 3.jpg',
    'Yosemite 4.jpg',
    'Yosemite 5.jpg',
    'Yosemite.jpg',
];

export class Photo {
    id: string;
    description: string;
    date: Date;
    author: string;

    constructor(public name: string, public url: string) {
    }
}

export class Album {
    id: string;
    photos: Photo[];
    thumbnail: Photo;

    constructor(public name: string) {

    }
}

@Injectable()
export class PhotoService {

    private photos: Photo[] = [];

    private albums: Album[] = [
        this.createAlbum('Yosemite',
            [
                'Yosemite 2.jpg',
                'Yosemite 3.jpg',
                'Yosemite 4.jpg',
                'Yosemite 5.jpg',
                'Yosemite.jpg'
            ]),
        this.createAlbum('Sierra',
            [
                'Sierra 2.jpg',
                'Sierra.jpg',
            ]),
        this.createAlbum('El Capitan',
            [
                'El Capitan 2.jpg',
                'El Capitan.jpg',
            ]),
        this.createAlbum('Wild Life',
            [
                'Elephant.jpg',
                'Lion.jpg',
            ]),
        this.createAlbum('Nature',
            [
                'Antelope Canyon.jpg',
                'Bahamas Aerial.jpg',
                'Blue Pond.jpg',
                'Death Valley.jpg',
                'Lake.jpg',
                'Floating Ice.jpg',
                'Foggy Forest.jpg',
                'Foxtail Barley.jpg',
                'Mountain Range.jpg',
                'Poppies.jpg',
                'Rice Paddy.jpg',
                'Rolling Waves.jpg',
                'Snow.jpg',
                'Wave.jpg',
            ]),

        this.createAlbum('Universe',
            [
                'Abstract.jpg',
                'Desert.jpg',
                'Milky Way.jpg',
                'Earth and Moon.jpg',
                'Earth Horizon.jpg',
            ])
    ];

    getAlbums(): Album[] {
        return this.albums;
    }

    getAlbum(id): Album {
        return this.albums.find(x => x.id === id);
    }

    getPhoto(id): Photo {
        return this.photos.find(x => x.id === id);
    }


    createAlbum(name, photos) {
        const album = new Album(name);
        album.id = uniqueId('A-');

        album.photos = photos.map(x => {
            const photo = new Photo(x.replace(/\..+$/, ''), `/src/images/${x}`);
            photo.id = uniqueId('P-');

            this.photos.push(photo);
            return photo;
        });

        album.thumbnail = album.photos[ 0 ];

        return album;
    }
}

