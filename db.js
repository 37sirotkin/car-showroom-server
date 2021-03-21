const Pool = require("pg").Pool;
const pool = new Pool({
    user: "zbiwpljb",
    password: "UUraoIHulRjvOxjbIqgQvcR44BAzyHZF",
    host: "tai.db.elephantsql.com",
    port: 5432,
    database: "zbiwpljb"
});

module.exports = pool;
