const axios = require("axios");
const env = require("../../environment");

module.exports = axios.create({
    baseURL: `http://${env.PRODUCT_HOST}:${env.PRODUCT_PORT}`,
    timeout: 1000,
    headers: {
        authorization: env.ACCESS_TOKEN
    }
});
