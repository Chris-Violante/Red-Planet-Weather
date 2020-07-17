const fetch = require('node-fetch')
const request = require('request')
const key = process.env.MARS_API_KEY
const baseUrl = `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`



module.exports = {
    getMarsData
}



function getMarsData(req, res) {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => res.send({ data }))
    }


