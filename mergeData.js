const fs = require('fs');

(() => {
    try {
        fs.readFile('./crawldata/topalbumus/AlbumList.txt', (err, data) => {
            console.log(data.toString())
        });
    } catch (error) {
        throw error;
    }
})();
