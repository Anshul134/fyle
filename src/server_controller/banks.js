const bankModel = require('../db/models/bankModel');
const appData = require('../appDataObj');

module.exports = {
    fetchOneBranch : (req, res) => {
				let {ifsc} = req.query;
				ifsc = ifsc.toUpperCase();
				const limit = (req.query.limit) ? req.query.limit : 25;
				const  offset = (req.query.offset) ? req.query.offset : 0;
				console.log("here",req.query);
        bankModel.oneBranch({ifsc, limit, offset})
                 .then( ({rows}) => {
					if(rows)
						res.send({status: 200, rows});
					else	
						res.send({status:400, message : appData.messages.NO_BRANCH});	 
				})
	},
	fetch_all : (req, res) => {
		let {name, city} = req.query;
		console.log("\n\n\nquery:::::::::::::::::", req.query);
		name = name.toUpperCase();
		city = city.toUpperCase();
		const limit = (req.query.limit) ? req.query.limit : 25;
		const  offset = (req.query.offset) ? req.query.offset : 0;
		const body = {name, city, limit, offset};
		bankModel.fetch_all(body) 
				.then( ({rows}) => {
					if(rows)
						res.send({status: 200, rows});
					else	
						res.send({status:400, message : appData.messages.NO_BRANCH});	 
				});
	},
	
};