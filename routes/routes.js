'use strict';

module.exports = function (app) {
    var data = require('../controllers/dataController');

    // Routes
    app.route('/top-album-us').get(data.getTopAlbumUS);
    app.route('/top-10-album-us').get(data.getTop10AlbumUS);
    app.route('/top-5-album-us').get(data.getTop5AlbumUS);

    app.route('/top-album-vietnam').get(data.getTopAlbumVietnam);
    app.route('/top-10-album-vietnam').get(data.getTop10AlbumVietnam);
    app.route('/top-5-album-vietnam').get(data.getTop5AlbumVietnam);

    app.route('/top-album-korea').get(data.getTopAlbumKorea);
    app.route('/top-10-album-korea').get(data.getTop10AlbumKorea);
    app.route('/top-5-album-korea').get(data.getTop5AlbumKorea);

    app.route('/album-for-new-day').get(data.getAlbumForNewDay);

    app.route('/top-album-us-rap-hiphop').get(data.getTopAlbumUSRapHiphop);
    app.route('/top-10-album-us-rap-hiphop').get(data.getTop10AlbumUSRapHiphop);
    app.route('/top-5-album-us-rap-hiphop').get(data.getTop5AlbumUSRapHiphop);

    app.route('/top-singers').get(data.getTopSingers);
    app.route('/top-10-singers').get(data.getTop10Singers);
    app.route('/top-5-singers').get(data.getTop5Singers);
};
