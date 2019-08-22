const express = require('express');
const router = express.Router();

const bank = require('../server_controller/banks');
const generateToken = require('../server_controller/generateToken');
//Middleware to check authorization
const checkAuth = require('../middlewares/check-auth');

/*| @Route /getToken/
	| @Method GET
	| @Desc Fetch JWT Token
	| @Inputs Inputs: -
	| @Ouptut Response : JWT token
	| @Access: Public
*/
router.get('/getToken', (req, res) => {
	generateToken.getJWT(req, res);
});


/*| @Route /bank/
	| @Method GET
	| @Desc Fetch bank deatails
	| @Inputs Inputs: IFSC code, JWT token 
	| @Ouptut Response : branch details+ bank name
	| @Access: Protected
*/
router.get('/bank', checkAuth, (req, res) => {
    bank.fetchOneBranch(req,res);
});



/*| @Route /branch/
	| @Method GET
	| @Desc Fetch branch & bank deatails
	| @Inputs Inputs: city, bank name & JWT token 
	| @Ouptut Response : all branch details + bank name
	| @Access: Protected
*/
router.get('/branch',checkAuth, (req, res) => {
	bank.fetch_all(req,res);
});

module.exports = router;