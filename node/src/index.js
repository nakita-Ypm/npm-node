const NodeAdapter = require('./adapter/node_adapter.js');
const App = require('./app.js');
const app = App.init();

NodeAdapter.serveApp(app);

if (process.pid) {
  console.log('This process is server pid ' + process.pid)
}
