class PingHandler {
  static apply(app) {
    app.on('request', (req, res) => {
      const url = req.url;
      const handler = this.routes[url] || this.notFound;
      handler(req, res);
    });
  }

  static hello(req, res) {
    this.sendResponse(res, 200, 'text/plain', 'Hello World!');
  }

  static ping(req, res) {
    this.sendResponse(res, 200, 'text/plain', 'pong');
  }

  static notFound(req, res) {
    this.sendResponse(res, 404, 'text/plain', 'Not Found');
  }

  static sendResponse(res, statusCode, contentType, body) {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(body);
  }
}

PingHandler.routes = {
  '/': PingHandler.hello.bind(PingHandler),
  '/ping': PingHandler.ping.bind(PingHandler)
};

module.exports = PingHandler;
