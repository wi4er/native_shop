const {fetchProduct, fetchBanner} = require("../fetch");
const {Router} = require("express");
const router = Router();
const ProductSection = require("../model/ProductSection");
const ProductContent = require("../model/ProductContent");
const BannerItem = require("../model/BannerItem");

router.get(
    "/",
    (req, res, next) => {
        Promise.all([
        ]).then(() => {
            res.render("home", {

            });
        }).catch(next);
    }
);

module.exports = router;
