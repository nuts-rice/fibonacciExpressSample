/* traditional callback-oriented asynchronous function 
    using setImmediate for each stage of calculation \
    spreads computation throughout event loop 
*/

exports.fibonacciAsync = function(n, done)
{
    //divide calculation into chunks 
    //then put chunks into event loop
    if (n === 0) done(undefined, 0);

    else if (n === 1 || n === 2) done(undefined, 1);
    else 
    {
        //event handling function transport syntax "=>"
        setImmediate(() =>
        {
            exports.fibonacciAsync(n-1, (err, val1) =>
            {
                if (err) done(err);
                else setImmediate (() =>
                {
                    exports.fibonacciAsync(n-2,(err, val2) =>
                    {
                        if (err) done(err);
                        else done(undefined, val1 + val2);
                    });
                });
            });
        });
    }
};