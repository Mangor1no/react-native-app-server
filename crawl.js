const puppeteer = require('puppeteer');
const fs = require('fs');

const ALBUM_DIR = '/top100singleus';
const CRAWL_URL =
    'https://www.nhaccuatui.com/playlist/top-100-pop-usuk-hay-nhat-va.zE23R7bc8e9X.html';

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

    await page.goto(`${CRAWL_URL}`);

    const dataUrlXML = await page.evaluate(() => {
        return window.player.peConfig.xmlURL;
    });

    let albums = await page.evaluate(() => {
        let items = [...document.querySelectorAll('#idScrllSongInAlbum>li')];
        let data = [];
        for (let item of items) {
            try {
                item.querySelector('.name_song').click();
                data = [
                    ...data,
                    {
                        songIndex: item
                            .querySelector('.nunberit')
                            .textContent.replace('.', '')
                            .trim(),
                        songName: item
                            .querySelector('.name_song')
                            .textContent.trim(),
                        songCover: document
                            .querySelector('#avatarSingerflashPlayer')
                            .style.backgroundImage.match(/\((.*?)\)/)[1]
                            .replace(/('|")/g, '')
                            .replace(/.jpg/, '_500.jpg')
                            .trim(),
                        songAuthor: item
                            .querySelector('.name_singer')
                            .textContent.trim(),
                        songUrl: item
                            .querySelector('.name_song')
                            .getAttribute('href'),
                    },
                ];
            } catch (error) {
                console.log(error);
            }
        }
        return data;
    });

    let albumUrlList = [];

    const getMp3 = async () => {
        await page.goto(dataUrlXML, {waitUntil: 'domcontentloaded'});
        const test = await page.evaluate(() => {
            const url = [];
            [
                ...document.getElementsByTagName('location'),
            ].forEach((item) => {
                url.push(item.innerHTML.trim().match(/[(a-zA-Z0-9\:\/\.\-\?\=\_\&)]{10,}/g)[0])
            });
            return url;
        });
        return test;
    };

    albumUrlList = await getMp3();

    albums = albums.map((element, index) => {
        return {
            ...element,
            songMp3Url: albumUrlList[index]
        }
    })

    try {
        if (!fs.existsSync('./crawldata' + ALBUM_DIR)) {
            await fs.mkdirSync('./crawldata' + ALBUM_DIR);
        }
        await fs.writeFile(
            './crawldata' + ALBUM_DIR + `/AlbumList.txt`,
            JSON.stringify(albums),
            function (err) {
                if (err) throw err;
                console.log('Saved');
            },
        );
    } catch (error) {
        throw error;
    }

    await browser.close();
})();
