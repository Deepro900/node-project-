/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// dependencies

const http = require('http');


const { handlerReqRes } = require('./helpers/handel');


/// app Object - module scaffolding
const app = {};

// configaration

app.config = {
    port: 3000,

};

//create Server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening to port ${app.config.port}`);
    });


    // dependencies
};

// handle Request Response
app.handleReqRes = handlerReqRes;

// start server
app.createServer();