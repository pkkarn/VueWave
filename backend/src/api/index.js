const Router = require('express').Router();
const WolframAlphaAPI = require('wolfram-alpha-node');

require('dotenv').config();

const waApi = WolframAlphaAPI(process.env.WOLFRAM_ALPHA);
const twitter = require('./twitter');
const youtube = require('./youtube');
const wikidata = require('./wikidata');


Router.get('/', async(req, res) => {
    const question = req.query.question;
    const answer = await waApi.getShort(question)
    res.json({ ans: answer });
});

Router.use('/twitter', twitter)
Router.use('/wikidata', wikidata)
Router.use('/youtube', youtube)

module.exports = Router;
