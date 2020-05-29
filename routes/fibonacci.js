const express = require('express');
const router = express.Router();

const math = require('../math');
router.get('/', function(req, res, next)
{
    if (req.query.fibonum)
    {
        //calculated in this server handler
        res.render('fibonacci',
        {
            title: 'Calculate fibonacci numbers',
            fibonum: req.query.fibonum,
            fiboval: math.fibonacci(req.query.fibonum)
        }
        );
    }
    else
    {
        res.render('fibonacci',
        {
            title:'Calculate fibonacci numbers',
            fiboval: undefined

        }
        );
    }
    }
);
module.exports = router;
 