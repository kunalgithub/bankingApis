const https = require("got");
exports.accounts = function (event, context, callback) {
    https('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }).then(response => {
        console.log(response);
        callback(null, "");
    }).catch(error => {
        console.log(error.response.body);
        callback("Error in Accounts");
    });
}
