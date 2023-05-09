const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.treadmtb.co.za'


app.get('/', (req ,res) => res.send('This is my Webscrapper') )

app.get('/results',(req,res) =>{
    axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []


        $('.title',html).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })

        })
        //console.log(articles)
        res.send(articles)

    }).catch(err => console.log(err))

})






app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))