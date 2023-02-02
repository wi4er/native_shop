const express = require('express');
const router = express.Router();

router.get(
    '/',
    function (req, res, next) {

        console.log(req.session['user']);

        res.render(
            'pages/index',
            {
                route: 'index',
                title: 'Express'
            }
        );
    }
);

module.exports = router;
