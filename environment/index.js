const process = require("process");

class Environment {
    get APP_PORT() {
        return process.env.PORT || 8080;
    }

    get PRODUCT_HOST() {
        return process.env.PRODUCT_HOST || "localhost";
    }

    get PRODUCT_PORT() {
        return process.env.PRODUCT_PORT || 8081;
    }
}

module.exports = new Environment();
