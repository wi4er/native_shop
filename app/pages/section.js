const fetch = require("../fetch");
const {Router} = require("express");
const router = Router();

router.get(
    "/:slug/",
    (req, res) => {
        const {params: {slug}} = req;

        res.render("section", {
            data: "ROOT",
            slug: slug
        });
    }
);

router.get(
    "/",
    (req, res) => {

        res.render("section", {
            data: "ROOT"
        });
    }
);



module.exports = router;
