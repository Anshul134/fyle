const sql_queries = require('../utils/sql');
const db = require('../connection');

module.exports = {
    oneBranch : (body) => {
        return new Promise( (resolve, reject) => {
            //console.log("ifsc val>>>>>>>>", body );
            db.query(sql_queries.FETCH_ONE, [body.ifsc, body.limit, body.offset] ,(err, data) =>{
                if(err) {
                    console.log("\n\n\nerror in models/ onebranch>>>>>", err);
                    reject(err);
                }
                //console.log("\n\n\n>>>>>>>",data);
                resolve(data);
            })
        });
    },
    fetch_all : (body) => {
        return new Promise( (resolve, reject) => {
            //console.log("body>>>>>>>>", body );
            db.query(sql_queries.FETCH_ALL, [body.name, body.city, body.limit, body.offset], (err, data) => {
                if(err) {
                    console.log("\n\n\nerror in models/ onebranch>>>>>", err);
                    reject(err);
                }
               // console.log(data);
                resolve(data);
            });
        });
    },
}