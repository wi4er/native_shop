const axios = require("axios");
const env = require("../../environment");

module.exports = axios.create({
    baseURL: `http://${env.SEARCH_HOST}`,
    timeout: 1000,
    headers: {
        authorization: env.ACCESS_TOKEN
    }
});
