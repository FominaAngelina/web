const {serviceCheckKey: checkKey} = require('../Services/servicesV3');

async function midCheckKey(req, res, next){
    let key = req.params['key'];
    let result = await checkKey(key);
    console.log(result);
    if (!result) res.statut(404).send("not found)") ;
    else
        next;
}

module.exports = {
    midCheckKey,
}