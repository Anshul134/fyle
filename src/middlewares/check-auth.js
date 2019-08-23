const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
         console.log(req.headers);
        //let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
        const {token} = req.headers['x-access-token'] || req.headers.authorization || ( (req.method === "GET") ? req.query : req.body );
       console.log("\n\n\ntoken::::::::::::::", {token})
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userData = decoded;
        next();
    }
    catch( error ) {
        console.log(error)
        return res.send({status:401, message: "Unauthorized"});
    }
}
