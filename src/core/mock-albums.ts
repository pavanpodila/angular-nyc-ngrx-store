import uniqueId = require('lodash/uniqueId');
import { Album, Photo } from './domain';

export const mockAlbums = [
    createAlbum('Yosemite',
        [
            'Yosemite 2.jpg',
            'Yosemite 3.jpg',
            'Yosemite 4.jpg',
            'Yosemite 5.jpg',
            'Yosemite.jpg'
        ]),
    createAlbum('Sierra',
        [
            'Sierra 2.jpg',
            'Sierra.jpg',
        ]),
    createAlbum('El Capitan',
        [
            'El Capitan 2.jpg',
            'El Capitan.jpg',
        ]),
    createAlbum('Wild Life',
        [
            'Elephant.jpg',
            'Lion.jpg',
        ]),
    createAlbum('Nature',
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

    createAlbum('Universe',
        [
            'Abstract.jpg',
            'Desert.jpg',
            'Milky Way.jpg',
            'Earth and Moon.jpg',
            'Earth Horizon.jpg',
        ])
];

function createAlbum(name, photos) {
    const album = new Album(name);
    album.id = uniqueId('A-');

    album.photos = photos.map(x => {
        const photo = new Photo(x.replace(/\..+$/, ''), `/src/images/${x}`);
        photo.id = uniqueId('P-');

        return photo;
    });

    album.thumbnail = album.photos[ 0 ];

    return album;
}
