function formatError(err) {
    return {
        message: err.message
    };
}

module.exports = (err, req, res, next) => {
    console.log(err);

    switch (err.constructor) {
        case Error: {
            res.status(400);

            break;
        }

        default: {
            res.status(500);
        }
    }

    res.json(formatError(err));
}
