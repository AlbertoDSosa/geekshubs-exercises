'use strict';

const config = require('./config');
const request = require('request');

let uri = config.api.uri;
let key = config.api.key;

function getMovies (queryParams, url) {
    if(queryParams){
        request(`${uri}?include_adult=${queryParams.include_adult}&language=es-es&sort_by=poularity.desc&api_key=${key}`, function (error, response, body) {
            if(error) console.log(error);
    
            if(url === '/movies') {
                res.statusCode = response.statusCode;
                res.setHeader('Content-Type', 'application/json');
                res.end(body);
            }  
        });
    }
}

// let url = `${uri}${}`;

module.exports = function (req, res) {
    let bodyReq = '';
    let dataQuery;
    console.log(req);
    req.on('data', chunk => {
        bodyReq += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        try {
            dataQuery = JSON.parse(bodyReq);
            getMovies(dataQuery, req.url)
        } catch(error) {
            res.statusCode = 401;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: "la petición necesita parametros"}));
        }
        
    });
}