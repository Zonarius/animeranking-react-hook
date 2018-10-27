const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api/v1', { changeOrigin: true, target: 'https://mesh.zonari.us' }));
    app.use(proxy('/images', {
        changeOrigin: true,
        target: 'https://mesh.zonari.us',
        pathRewrite: {
            "^/": "/api/v1/animeranking/webroot/"
        }
    }));
};
