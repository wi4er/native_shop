const {Router} = require("express");
const router = Router();
const ProductSection = require("../model/ProductSection");
const ProductContent = require("../model/ProductContent");
const {fetchProduct} = require("../fetch");

router.get(
    "/:slug/",
    (req, res, next) => {
        const {params: {slug}} = req;

        fetchProduct(`/section/?filter[uniq][in]=${slug}`)
            .then(section => {
                return Promise.all([
                    fetchProduct(`/content/?filter[section][in]=${section.data[0]._id}`),
                    Promise.resolve(section),
                ]);
            })
            .then(([product, section]) => {
                console.log(product.data);


                res.render("section", {
                    list: product.data.map(item => new ProductContent(item)),
                    section: new ProductSection(product.data[0]),
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
