const process = require("process");

class Environment {
    get APP_PORT() {
        return process.env.PORT || 8080;
    }
}

module.exports = new Environment();
