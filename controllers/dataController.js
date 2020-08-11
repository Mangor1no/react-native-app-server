const express = require('express');
const axios = require('axios');

const {
    DOMAIN,
    TOP_ALBUM_US_URL,
    TOP_ALBUM_FILENAME,
    TOP_ALBUM_KOREA_URL,
    TOP_ALBUM_VIETNAM_URL,
    ALBUM_FOR_NEW_DAY,
    ALBUM_FOR_NEW_DAY_FILENAME,
    TOP_ALBUM_US_RAP_HIPHOP_URL,
    TOP_SINGER_URL,
    TOP_SINGER_FILENAME,
} = require('../config/config');

// US ALBUM
exports.getTopAlbumUS = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_US_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({data: res.data, title: 'Top Album US'});
            }
        })
        .catch((err) => {
            console.log('getTopAlbumUS error: ', err);
            response.send('error');
        });
};

exports.getTop5AlbumUS = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_US_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 5),
                    title: 'Top 5 Album US',
                });
            }
        })
        .catch((err) => {
            console.log('getTopAlbumUS error: ', err);
            response.send('error');
        });
};

exports.getTop10AlbumUS = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_US_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 10),
                    title: 'Top 10 Album US',
                });
            }
        })
        .catch((err) => {
            console.log('getTopAlbumUS error: ', err);
            response.send('error');
        });
};

// KOREA ALBUM
exports.getTopAlbumKorea = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_KOREA_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({data: res.data, title: 'Top Album Korea'});
            }
        })
        .catch((err) => {
            console.log('getTopAlbumKorea error: ', err);
            response.send('error');
        });
};

exports.getTop5AlbumKorea = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_KOREA_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 5),
                    title: 'Top 5 Album Korea',
                });
            }
        })
        .catch((err) => {
            console.log('getTopAlbumKorea error: ', err);
            response.send('error');
        });
};

exports.getTop10AlbumKorea = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_KOREA_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 10),
                    title: 'Top 10 Album Korea',
                });
            }
        })
        .catch((err) => {
            console.log('getTopAlbumKorea error: ', err);
            response.send('error');
        });
};

// ALBUM VIETNAM
exports.getTopAlbumVietnam = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_VIETNAM_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({data: res.data, title: 'Top Album Vietnam'});
            }
        })
        .catch((err) => {
            console.log('getTopAlbumVietnam error: ', err);
            response.send('error');
        });
};

exports.getTop5AlbumVietnam = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_VIETNAM_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 5),
                    title: 'Top 5 Album Vietnam',
                });
            }
        })
        .catch((err) => {
            console.log('getTopAlbumVietnam error: ', err);
            response.send('error');
        });
};

exports.getTop10AlbumVietnam = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_VIETNAM_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 10),
                    title: 'Top 10 Album Vietnam',
                });
            }
        })
        .catch((err) => {
            console.log('getTopAlbumVietnam error: ', err);
            response.send('error');
        });
};

// ALBUM FOR NEW DAY
exports.getAlbumForNewDay = function (request, response) {
    const luckyNumber = Math.floor(Math.random() * 11);
    axios
        .get(`${DOMAIN}${ALBUM_FOR_NEW_DAY}${ALBUM_FOR_NEW_DAY_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(luckyNumber, luckyNumber + 1),
                    title: 'Album For New Day',
                });
            }
        })
        .catch((err) => {
            console.log('getAlbumForNewDay error: ', err);
            response.send('error');
        });
};

// ALBUM US RAP HIPHOP
exports.getTopAlbumUSRapHiphop = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_US_RAP_HIPHOP_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({data: res.data, title: 'Hiphop For Life'});
            }
        })
        .catch((err) => {
            console.log('getTopAlbumUSRapHiphop error: ', err);
            response.send('error');
        });
};

exports.getTop5AlbumUSRapHiphop = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_US_RAP_HIPHOP_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 5),
                    title: 'Hiphop For Life',
                });
            }
        })
        .catch((err) => {
            console.log('get5TopAlbumUSRapHiphop error: ', err);
            response.send('error');
        });
};

exports.getTop10AlbumUSRapHiphop = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_ALBUM_US_RAP_HIPHOP_URL}${TOP_ALBUM_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 10),
                    title: 'Hiphop For Life',
                });
            }
        })
        .catch((err) => {
            console.log('get10TopAlbumUSRapHiphop error: ', err);
            response.send('error');
        });
};

// SINGERS
exports.getTopSingers = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_SINGER_URL}${TOP_SINGER_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({data: res.data, title: 'Favourite Singers'});
            }
        })
        .catch((err) => {
            console.log('getTopSingers error: ', err);
            response.send('error');
        });
};

exports.getTop5Singers = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_SINGER_URL}${TOP_SINGER_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 5),
                    title: 'Favourite Singers',
                });
            }
        })
        .catch((err) => {
            console.log('get5TopSingers error: ', err);
            response.send('error');
        });
};

exports.getTop10Singers = function (request, response) {
    axios
        .get(`${DOMAIN}${TOP_SINGER_URL}${TOP_SINGER_FILENAME}`)
        .then((res) => {
            if (res && res.data && res.data.length > 0) {
                response.json({
                    data: res.data.slice(0, 10),
                    title: 'Favourite Singers',
                });
            }
        })
        .catch((err) => {
            console.log('get10TopSingers error: ', err);
            response.send('error');
        });
};
