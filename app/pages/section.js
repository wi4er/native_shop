const {Router} = require("express");
const router = Router();
const ProductSection = require("../model/ProductSection");
const ProductContent = require("../model/ProductContent");
const {fetchProduct} = require("../fetch");
const NotFoundError = require("../exception/NotFoundError");

router.get(
    "/:slug/",
    (req, res, next) => {
        const {params: {slug}} = req;

        fetchProduct(`/section/?filter[uniq][in]=${slug}`)
            .then(section => {
                NotFoundError.assert(section.data.length);

                return Promise.all([
                    fetchProduct(`/content/?filter[section][in]=${section.data[0]._id}`),
                    Promise.resolve(section.data[0]),
                ]);
            })
            .then(([product, section]) => {
                res.render("section", {
                    list: product.data.map(item => new ProductContent(item)),
                    section: new ProductSection(section),
                    slug: slug,
                });
            })
            .catch(next);
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
