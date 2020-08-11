const mongoose = require('mongoose');

const AlbumSingleModel = mongoose.model('albumSingle', {
    data: [
        {
            albumIndex: 'Number',
            albumName: 'String',
            albumCover: 'String',
            albumAuthor: 'String',
            albumUrl: 'String'
        },
    ],
});
