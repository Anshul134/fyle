module.exports = {
    FETCH_ONE : 'SELECT *, banks.name FROM branches INNER JOIN banks ON bank_id = id WHERE ifsc = $1',
    FETCH_ALL : 'SELECT *,banks.name FROM branches LEFT JOIN banks ON id = bank_id WHERE name = $1 AND city = $2'
}