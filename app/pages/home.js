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
            fetchProduct("/section/"),
            fetchBanner("content/"),
            fetchProduct("/content/?filter[flag][in]=novelty"),
            fetchProduct("/content/?filter[flag][in]=popular"),
        ]).then(([section, banner, novelty, popular]) => {
            res.render("home", {
                section: section.data.map(item => new ProductSection(item)),
                banner: banner.data.map(item => new BannerItem(item)),
                novelty: novelty.data.map(item => new ProductContent(item)),
                popular: popular.data.map(item => new ProductContent(item)),
            });
        }).catch(next);
    }
);

module.exports = router;
