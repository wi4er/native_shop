const {fetchProduct, fetchBanner} = require("../fetch");
const {Router} = require("express");
const router = Router();
const ProductSection = require("../model/ProductSection");
const BannerItem = require("../model/BannerItem");


router.get(
    "/",
    (req, res, next) => {
        Promise.all([
            fetchProduct("/section/"),
            fetchBanner("content/")
        ]).then(([section, banner]) => {
            res.render("home", {
                section: section.data.map(item => new ProductSection(item)),
                banner: banner.data.map(item => new BannerItem(item)),
            });
        }).catch(next)
    }
);

module.exports = router;
