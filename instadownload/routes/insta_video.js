let cheerio = require('cheerio');
let request = require('request');
let Stringify  = require('json-stringify-safe');
const Newsfeed = require("../model/Newsfeed");

module.exports = (req, res) => {
    
    let video_url = req.query.url;
    if(video_url !== undefined){

        if(video_url.substring(0,8) === 'https://' || video_url.substring(0,7) === 'http://' 
                || video_url.substring(0,21) === 'https://www.instagram' || video_url.substring(0,20) === 'http://www.instagram.com'){

            request(video_url, (error, response, html) => {
                if(!error){
                    //console.log('Insta_grab : '+video_url+' : Loaded');
                    let $ = cheerio.load(html);

                    //basic data from the meta tags
                    let link = $('meta[property="og:video"]').attr('content');
                    //let file = $('meta[property="og:type"]').attr('content');
                    //let url = $('meta[property="og:url"]').attr('content');
                    //console.log(url)
                    let title = $('meta[property="og:title"]').attr('content');

                    const news = new Newsfeed({link,title});
                    news.save()
                    res.status(200).json(news);


                    
                }else{
                    res.status(400).json({ 'message' : 'Error, Unable to load webpage'});
                }
            });
        }else{
            res.status(201).json({ 'message' : 'Invalid URL'});
        }
    }else{
        res.status(400).json({ 'message' : 'Provided invalid URL'});
    }
};


