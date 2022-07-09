const NotFoundError = require("./NotFoundError");

module.exports = (err, req, res, next) => {
    console.log(err);

    switch (err.constructor) {
        case Error: {
            res.status(400);

            return res.render("not_found");
        }

        case NotFoundError: {
            res.status(404);
            return res.render("not_found");
        }

        default: {
            res.status(500);

            return res.render("not_found");
        }
    }
}
