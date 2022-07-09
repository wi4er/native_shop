const {Router} = require("express");
const router = Router();
const {fetchProduct} = require("../fetch");
const NotFoundError = require("../exception/NotFoundError");

router.get(
    "/:slug/",
    (req, res, next) => {
        const {params: {slug}} = req;

        fetchProduct(`/content/?filter[uniq][in]=${slug}`)
            .then(product => {
                NotFoundError.assert(product.data.length, "Record not found");

                res.render("detail", {
                    item: product[0],
                    slug: slug,
                });
            })
            .catch(next);
    }
);

module.exports = router;
