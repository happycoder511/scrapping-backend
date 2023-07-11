const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
router.post("/", async (req, resp) => {
    var result = ""
    if(req.body.url) {
        axios.get(req.body.url).then(res => {
            const $ = cheerio.load(res.data);
            $('body').find('p').each((index, element) => {
                const text = $(element).text().trim();
                if(text != '') {
                   result += text;
                }
            })
            return resp.json({
                information: result
            })
        })
        .catch(err => console.log(err))
    }
   
})
module.exports = router;