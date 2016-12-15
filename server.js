'use strict';

const Hapi = require('hapi'),
    Routes = require('./routes'),
    Config = require('./config/config'),
    Db = require('./config/db');

var app = {};
app.config = Config;

const server = new Hapi.Server();

server.connection({port: app.config.server.port});

console.log(server.version);
console.log(Routes.endpoints);

server.route(Routes.endpoints);

server.register({
    register: require('hapi-cors'),
    options: {
        origins: ['http://localhost:3000']
    }
}, function(err){
    server.start((err) => {
        if (err) {
            throw err;
        }

        console.log('Server running at:', server.info.uri);

    });
});


exports.Server = server;