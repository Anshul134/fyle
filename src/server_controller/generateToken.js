const jwt = require('jsonwebtoken');

module.exports = {
    getJWT : (req, res) => {
		const token = jwt.sign({
			data : process.env.DATA
        }, process.env.JWT_SECRET, { expiresIn: '5d' });
        res.send({status:200, token});
	},
}