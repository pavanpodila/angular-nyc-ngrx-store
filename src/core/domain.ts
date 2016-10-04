export class Photo {
    id: string;
    description: string;
    date: Date;
    author: string;

    constructor(public name: string = '', public url: string = '') {
    }
}

export class Album {
    id: string;
    photos: Photo[];
    thumbnail: Photo;

    constructor(public name: string = '') {

    }
}

