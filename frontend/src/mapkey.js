if (process.env.NODE_ENV === "production") {
    module.exports = require("./mapkey_prod");
} else {
    module.exports = require("./mapkey_dev");
}