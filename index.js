const cheerio = require("cheerio")
const axios = require("axios")

const axiosResponse = await axios.request({
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    },
    method: "GET",
    url: "https://brightdata.com/",
})
