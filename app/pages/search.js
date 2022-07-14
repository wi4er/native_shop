const {fetchProduct, fetchBanner, fetchSearch} = require("../fetch");
const {Router} = require("express");
const router = Router();
const ProductSection = require("../model/ProductSection");
const ProductContent = require("../model/ProductContent");
const BannerItem = require("../model/BannerItem");

router.get(
    "/",
    (req, res, next) => {
        const {query: {q}} = req;

        Promise.all([
            fetchSearch.get(`/search/?q=${q}`).then(data => data.data)
        ])
            .then(([ids]) => {
                if (ids.length) {
                    return fetchProduct(`/content/?filter[field][id][in]=${ids.join(";")}`);
                } else {
                    return {data: []};
                }
            })
            .then(product => {
                res.render("section", {
                    list: product.data.map(item => new ProductContent(item)),
                });
            })
            .catch(next);
    }
);

module.exports = router;
