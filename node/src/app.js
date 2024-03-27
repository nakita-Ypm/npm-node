const http = require('http');
const PingHandler = require('./handler/ping_handler.js');

class App {
    static init() {
        const app = http.createServer();
        return this.apply_handlers(app);
    }

    static apply_handlers(app) {
        PingHandler.apply(app);
        return app;
    }
}

module.exports = App;