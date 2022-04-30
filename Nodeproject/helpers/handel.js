//dependencies 
// to collect buffer data using string_decoder
const { StringDecoder } = require('string_decoder');
const url = require('url');
//const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routesHandlers/notFoundHandler');
const handler = {};

handler.handlerReqRes = (req, res) => {

    // require handing 
    // get url and parse it
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObjct = req.headers;
    console.log(headersObjct);
    console.log(queryStringObject);
    console.log(trimmedPath);

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObjct,
    };


    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const chosenHandler = routes[trimmedPath] ? routers[trimmedPath] : notFoundHandler;
    chosenHandler(requestProperties, (statusCode, payload) => {
        statuesCode = typeof(statusCode) === 'number' ? statusCode : 500;

        payload = typeof(payload) === 'object' ? payload : {};

    });


    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
        console.log("hello world");
    })



};
module.exports = handler;