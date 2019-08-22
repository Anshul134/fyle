const Pool = require('pg').Pool

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// pool.on('connect', (err) => {
//   if(err)
//     console.log(err);
//   console.log('connected to the db');
// });

 module.exports= pool; 