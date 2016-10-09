import * as uniqueId from 'lodash/uniqueId';
import { Album, Photo } from './domain';

export const mockAlbums = [
    createAlbum('Yosemite',
        [
            'Yosemite_2.jpg',
            'Yosemite_3.jpg',
            'Yosemite_4.jpg',
            'Yosemite_5.jpg',
            'Yosemite.jpg'
        ]),
    createAlbum('Sierra',
        [
            'Sierra_2.jpg',
            'Sierra.jpg',
        ]),
    createAlbum('El Capitan',
        [
            'El_Capitan_2.jpg',
            'El_Capitan.jpg',
        ]),
    createAlbum('Wild Life',
        [
            'Elephant.jpg',
            'Lion.jpg',
        ]),
    createAlbum('Nature',
        [
            'Antelope_Canyon.jpg',
            'Bahamas_Aerial.jpg',
            'Blue_Pond.jpg',
            'Death_Valley.jpg',
            'Lake.jpg',
            'Floating_Ice.jpg',
            'Foggy_Forest.jpg',
            'Foxtail_Barley.jpg',
            'Mountain_Range.jpg',
            'Poppies.jpg',
            'Rice_Paddy.jpg',
            'Rolling_Waves.jpg',
            'Snow.jpg',
            'Wave.jpg',
        ]),

    createAlbum('Universe',
        [
            'Abstract.jpg',
            'Desert.jpg',
            'Milky_Way.jpg',
            'Earth_and_Moon.jpg',
            'Earth_Horizon.jpg',
        ])
];

function createAlbum(name, photos) {
    const album = new Album(name);
    album.id = uniqueId('A-');

    album.photos = photos.map(x => {
        const photo = new Photo(x.replace(/\..+$/, '').replace(/_/g, ' '), `/images/${x}`);
        photo.id = uniqueId('P-');

        return photo;
    });

    album.thumbnail = album.photos[ 0 ];

    return album;
}
