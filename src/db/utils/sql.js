module.exports = {
    FETCH_ONE : 'SELECT *, banks.name FROM `branches` INNER JOIN `banks` ON `bank_id` = `id` WHERE `ifsc` = ?',
    FETCH_ALL : 'SELECT *,banks.name FROM `branches` LEFT JOIN `banks` ON `id` = `bank_id` WHERE `name` = ? AND city = ?'
}