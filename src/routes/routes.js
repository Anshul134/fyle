const express = require('express');
const router = express.Router();

const bank = require('../server_controller/banks');

/*| @Route /bank/
	| @Method GET
	| @Desc Fetch bank deatails
	| @Inputs Inputs: IFSC code, JWT token 
	| @Ouptut Response : branch details+ bank name
	| @Access: Protected
*/
router.get('/bank', (req, res) => {
    bank.fetchOneBranch(req,res);
});
router.get('/branch', (req, res) => {
	bank.fetch_all(req,res);
})

module.exports = router;