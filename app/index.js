try {
    const express = require("express")
    const app = express();
    const path = require("path");

    app.use(require("cors")({}));
    app.use(require('body-parser').json());
    app.use("/", express.static(path.resolve(__dirname, "../public")));

    module.exports = app;
} catch (err) {
    module.exports = (req, res) => {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({message: err.message}));
        res.end();
    }
}
