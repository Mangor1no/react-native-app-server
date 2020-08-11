const puppeteer = require('puppeteer');
const fs = require('fs');

const ALBUM_DIR = '/topalbumus';
const CRAWL_URL =
    'https://chiasenhac.vn/nghe-album/ugly-is-beautiful-xss73q70qtwetn.html';

const pathToExtension =
    'C:\\Users\\tlgde\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\cjpalhdlnbpafiamejdnhcphjbkeiagm\\1.28.4_0';

(async () => {
    const browser = await puppeteer.launch({
        // headless: false,
        // args: [
        //     `--disable-extensions-except=${pathToExtension}`,
        //     `--load-extension=${pathToExtension}`,
        // ],
    });
    const page = await browser.newPage();
    let totalAlbums = [];
    await page.goto(`${CRAWL_URL}`);

    const albums = await page.evaluate(() => {
        let albumName = document.querySelector(
            'a[href="/nghe-album/ugly-is-beautiful-xss73q70qtwetn.html"]',
        ).textContent;
        let items = [
            ...document
                .querySelector('.d-table')
                .querySelectorAll('.card-footer'),
        ];
        let data = [];
        items.forEach((item) => {
            item.querySelector('.name').firstElementChild.click();
            let querySongUrl;
            if (
                [...document.querySelectorAll('.jw-video.jw-reset')].length > 1
            ) {
                querySongUrl = [
                    ...document.querySelectorAll('.jw-video.jw-reset'),
                ][1];
            } else
                querySongUrl = [
                    ...document.querySelectorAll('.jw-video.jw-reset'),
                ][0];

            data = [
                ...data,
                {
                    songName: item
                        .querySelector('.name')
                        .firstElementChild.getAttribute('title')
                        .trim(),
                    songUrl: querySongUrl.getAttribute('src'),
                    authorName: item
                        .querySelector('.author')
                        .firstElementChild.textContent.trim(),
                    albumName: albumName,
                },
            ];
        });
        return data;
    });

    // await albums.forEach((element) => {
    //     console.log(element.songName);
    // });

    totalAlbums = [...totalAlbums, ...albums];

    console.log(totalAlbums);

    // const songUrl = await totalAlbums.forEach(async (element) => {
    //     console.log(1, element);
    //     await page.evaluate(() => {
    //         page.click('');
    //     });
    // });

    // try {
    //     if (!fs.existsSync('./crawldata' + ALBUM_DIR)) {
    //         await fs.mkdirSync('./crawldata' + ALBUM_DIR);
    //     }
    //     await fs.writeFile(
    //         './crawldata' + ALBUM_DIR + `/AlbumListDetail.txt`,
    //         JSON.stringify(totalAlbums),
    //         function (err) {
    //             if (err) throw err;
    //             console.log('Saved');
    //         },
    //     );
    // } catch (error) {
    //     throw error;
    // }

    await browser.close();
})();
