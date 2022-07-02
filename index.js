const env = require("./environment")
const http = require("http");

http
    .createServer(require("./app"))
    .listen(env.APP_PORT, err => {
        if (err) {
            console.log(err);
        } else {
            console.log(`>>> Server starts at ${env.APP_PORT} >>>>`);
        }
    });
