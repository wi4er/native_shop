const fetch = require("../fetch");
const {Router} = require("express");
const router = Router();
const ProductSection = require("../model/ProductSection");

router.get(
    "/",
    (req, res, next) => {
        Promise.all([
            fetch("/section/")
        ]).then(([section]) => {
            res.render("home", {
                section: section.data.map(item => new ProductSection(item))
            });
        }).catch(next)
    }
);

module.exports = router;
