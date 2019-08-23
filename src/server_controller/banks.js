const bankModel = require('../db/models/bankModel');
const appData = require('../appDataObj');

module.exports = {
    fetchOneBranch : (req, res) => {
				const {ifsc} = req.query;
				console.log("here",req.query);
        bankModel.oneBranch(ifsc)
                 .then( (data) => {
									 if(data)
										 res.send({status: 200, data});
									else	
										res.send({status:400, message : appData.messages.NO_BRANCH});	 
								 })//.err( (err) => {
								// 	 console.log("\n\n\nerror in fetchonebranch>>>>>>>>>", err);
								// 	 res.send({status:500, message: app.messages.WRONG});
								//  });
	},
	fetch_all : (req, res) => {
		const {name, city} = req.query;
		const body = {name, city};
		bankModel.fetch_all(body) 
				.then( (data) => {
					if(data && data.length)
						res.send({status: 200, data});
				else	
					res.send({status:400, message : appData.messages.NO_BRANCH});	 
				});
	},
	
};