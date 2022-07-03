const fetch = require("../fetch");
const {Router} = require("express");
const router = Router();

router.get(
    "/",
    (req, res) => {
        res.render("home", {
            data: "DATA"
        });
    }
);

module.exports = router;
