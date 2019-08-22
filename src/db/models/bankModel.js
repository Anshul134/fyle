const sql_queries = require('../utils/sql');


module.exports = {
    oneBranch : (body) => {
        return new Promise( (resolve, reject) => {
            console.log("ifsc val>>>>>>>>", body );
            db.query(sql_queries.FETCH_ONE, [body] ,(err, data) =>{
                if(err) {
                    console.log("\n\n\nerror in models/ onebranch>>>>>", err);
                    reject(err);
                }
                console.log(data);
                resolve(data);
            })
                    // .then( (data) => {
                       
                    // }).err((err) => {
                        
                    // });
        });
    },
    fetch_all : (body) => {
        return new Promise( (resolve, reject) => {
            db.query(sql_queries.FETCH_ALL, [body.name, body.city], (err, data) => {
                if(err) {
                    console.log("\n\n\nerror in models/ onebranch>>>>>", err);
                    reject(err);
                }
                console.log(data);
                resolve(data);
            });
        });
    },
}