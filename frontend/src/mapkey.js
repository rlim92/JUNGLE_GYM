if (process.env.NODE_ENV === "production") {
    module.exports = require("./mapkeys_prod");
} else {
    module.exports = require("./mapkeys_dev");
}
