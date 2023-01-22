const express = require('express');
const router = express.Router();

router.get(
    '/',
    function (req, res, next) {
        res.render(
            'index',
            {
                route: 'catalog',
                title: 'Express',
            }
        );
    }
);

module.exports = router;
