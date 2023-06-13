const {serviceCheckKey: checkKey} = require('../Services/servicesV3');

async function midCheckKey(req, res, next){
    let key = req.headers['x-api-key'];
    let result = await checkKey(key);
    console.log(result);
    if (!result) res.status(404).send('Такого пользователя нет!');
    else
        next();
}

function midError(error, req, res, next) {
    console.error(error);
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.status
    })
}

module.exports = {
    midCheckKey,
    midError,
}