const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        const {token} = (req.method === "GET") ? req.query : req.body;
        console.log(jwt.verify(token, process.env.JWT_SECRET))
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userData = decoded;
        next();
    }
    catch( error ) {
        console.log(error)
        return res.send({status:401, message: "Unauthorized"});
    }
}