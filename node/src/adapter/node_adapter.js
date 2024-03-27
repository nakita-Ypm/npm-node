require('dotenv').config();

class NodeAdapter {
    static serveApp(app) {
        const defaultPort = 3001;
        const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : defaultPort
        app.listen(port, () => { console.log(`Listening on port ${port}`) })
    }
} 

module.exports = NodeAdapter;