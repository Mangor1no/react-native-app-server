const puppeteer = require('puppeteer');
const fs = require('fs');

const ALBUM_DIR = '/topsinger';
const CRAWL_URL = 'https://chiasenhac.vn/';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let totalSingers = [];
    await page.goto(`${CRAWL_URL}`);

    const singers = await page.evaluate(() => {
        let items = [...document.querySelectorAll('.img-thumbnail.singer')];
        let data = [];
        items.forEach((item) => {
            data = [
                ...data,
                {
                    singerName: item.querySelector('span').textContent.trim(),
                    singerCover: item
                        .style.backgroundImage.slice(5, -2)
                        .trim(),
                    singerUrl: item.href.trim(),
                },
            ];
        });
        return data;
    });
    totalSingers = [...totalSingers, ...singers];

    try {
        if (!fs.existsSync('./crawldata' + ALBUM_DIR)) {
            await fs.mkdirSync('./crawldata' + ALBUM_DIR);
        }
        await fs.writeFile(
            './crawldata' + ALBUM_DIR + `/SingerList.txt`,
            JSON.stringify(totalSingers),
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
