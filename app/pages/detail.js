const {Router} = require("express");
const router = Router();
const {fetchProduct} = require("../fetch");

router.get(
    "/:slug/",
    (req, res, next) => {
        const {params: {slug}} = req;

        fetchProduct(`/content/?filter[uniq][in]=${slug}`)
            .then(product => {
                res.render("detail", {
                    item: product[0],
                    slug: slug,
                });
            })
            .catch(next);
    }
);

module.exports = router;
