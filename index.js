const cheerio = require("cheerio")
const axios = require("axios")


const scrapper = async () => {
  // retrieve a web page
  const retrivedWebPage = await axios.request({
    method: "GET",
    url: "https://people.com/celebrity/",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    },
  })

  // passing the retrived code to cheerio

  const $ = cheerio.load(retrivedWebPage.data)

  // initialize data structure

  const celebrities = [];
  const websiteSocialMdeia = [];

  // scrap data from a web page
  $('#tax-sc__recirc-list_1-0').find('a').each((i, element) => {
    const imgURL = $(element).find('.loc.card__top .card__media.mntl-universal-image.card__media.universal-image__container .img-placeholder img').attr('data-src');
    const content =  $(element).find('.card__content');
    const category = $(content).attr('data-tag');
    const text = $(content).find('.card__title .card__title-text ').text();
    const writer = $(content).find('.mntl-card__byline').attr('data-byline');

    celebrities.push({imgURL, category, text, writer})
  })

  $('#tax-sc__recirc-list_1-0-1').find('a').each((i, element) => {
    const imgURL = $(element).find('.loc.card__top .card__media.mntl-universal-image.card__media.universal-image__container .img-placeholder img').attr('data-src');
    const content =  $(element).find('.card__content');
    const category = $(content).attr('data-tag');
    const text = $(content).find('.card__title .card__title-text ').text();
    const writer = $(content).find('.mntl-card__byline').attr('data-byline');

    celebrities.push({imgURL, category, text, writer})
  })

  $('ul.social-follow__list').find('li').each((i, social) => {
    const socialLink = $(social).find('a').attr('href');
    const socialName = $(social).find('a').attr('data-network');
    websiteSocialMdeia.push({socialLink, socialName})
  })

  console.log(celebrities.length);
  console.log(websiteSocialMdeia);
}

scrapper();
