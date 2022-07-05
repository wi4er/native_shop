const process = require("process");

class Environment {
    get APP_PORT() {
        return process.env.PORT || 8080;
    }

    get PRODUCT_HOST() {
        return process.env.PRODUCT_HOST || "localhost:8081";
    }

    get BANNER_HOST() {
        return process.env.PRODUCT_HOST || "localhost:8082";
    }

    get ACCESS_TOKEN() {
        return process.env.PRODUCT_PORT || "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiYWRtaW4iOnRydWUsImlhdCI6MTY1Mzg3NDAxM30.PDa_NPahbV8-xPlb4djOuQLr-xpMBvs8-LXiV-bzdZU";
    }
}

module.exports = new Environment();
