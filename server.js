'use strict';
var express = require('express')
var path = require('path')
var http = require('http')
var cookieParser = require('cookie-parser')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var server = express()
var cors = require('cors')

const NodeCache = require('node-cache')
var async = require('async')
const fileUpload = require('express-fileupload')

var constants = require('./server/utility/constants')
var errorConstant = require('./server/utility/errorconstants')
const winston_logger = require('./server/utility/logger')

var userAuthRouter = require('./server/routes/userAuthRouter')

server.use(fileUpload({
    createParentPath: true
}))
server.use(cors())
server.set('myCache', new NodeCache({ stdTTL: 200, checkperiod: 120 }))
async.waterfall([
    (callback) => {
        server.use(bodyParser.json({ limit: '50mb' }));
        server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        server.use(cookieParser());
        server.use(morgan('combined', { stream: winston_logger.stream }));
        server.use('/auth',userAuthRouter);
        server.use('*', function (req, res) {
            res.status(404).send(
                errorConstant.BAD_URL);
            res.end();
        });
        callback(null, true);
    }
],(error,response) =>{
    var log = require('./server/utility/logger'), logger = log.logger;
    if (error) {        
        logger.log("error", "Error while starting server. Please check error log %s", error.message)
    } else {
        const port = 3011
        process.on('uncaughtException', function (e) {
            logger.log("error", "UnCaught Exception :: ", e);
        })
        http.createServer(server).listen(
            port,
            function () {
                logger.log("info", "Started NodeJS server For GSTR2B Offline Utility , listening on port :: "+port+" , :: %s , %s", server.get('port'), new Date().getTime(), new Date().toString());
                logger.level = constants.LOG_LEVEL;
            }
        );
    }
})
