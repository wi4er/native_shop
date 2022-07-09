try {
    const express = require("express");
    const compression = require("compression");
    const app = express();
    const path = require("path");

    app.use(require("cors")({}));
    app.use(require('body-parser').json());
    app.use(compression())
    app.use("/", express.static(path.resolve(__dirname, "../public")));

    app.set('views', path.join(__dirname, './view'));
    app.set('view engine', 'twig');

    app.use("/", require("./pages/home"));
    app.use("/catalog", require("./pages/section"));
    app.use("/product", require("./pages/detail"));
    app.use("/search", require("./pages/search"));

    app.use(require("./exception"));

    module.exports = app;
} catch (err) {
    module.exports = (req, res) => {
        console.error(err.message);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({message: err.message}));
        res.end();
    }
}
